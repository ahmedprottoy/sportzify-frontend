import React, { useState, useContext } from "react";
import { useMutation,useQueryClient } from "react-query";
import { updateUserImageReq } from "../../services/userService.js";
import { AuthContext } from "../../context/authContext";
import {  useNavigate } from "react-router-dom";

import Upload from "../../assets/upload.svg";

function UpdateImage({ closeModal }) {
  const { username,setImageUrl } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      handleFileChange(file);
    }
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    updateImageMutation.mutate({ formData, username });
  };

  const updateImageMutation = useMutation(
    (data) => updateUserImageReq(data.formData, data.username),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("userData");
        closeModal();
        setImageUrl(data.imageUrl);
        navigate(`/profile/${data.username}`);
        
      },
    }
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-center">
        <label className=" relative flex flex-col rounded-lg border-4 border-dashed w-full h-52 p-10 group text-center justify-center">
          <div className="h-full w-full text-center flex flex-col items-center justify-cente mt-5">
            <div className="flex flex-row justify-center max-h-48 w-2/5  -mt-10">
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="rounded-lg has-mask h-36 object-center "
                  />
                </div>
              ) : (
                <object
                  className="has-mask h-36 object-center"
                  data={Upload}
                  type="image/svg+xml"
                />
              )}
            </div>

            <p className="pointer-none text-gray-500 ">
              <span className="text-blue-600 hover:underline">
                Select a file{" "}
              </span>
              from your computer
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
        </label>
      </div>

      <button
        className="p-3 bg-gray-200 w-40 rounded-lg"
        onClick={handleSubmit}
      >
        Update Image
      </button>
    </div>
  );
}

export default UpdateImage;

import React, { useState } from "react";
import { useMutation } from "react-query";
import { createBlogReq } from "../services/blogService";
import ImageUpload from "../components/articleCreate/imageUpload";
import CreateInput from "../components/articleCreate/CreateInput";
import Upload from "../assets/upload.svg";
import ButtonUI from "../components/common/ButtonUI";
import Publish from "../assets/publish.png";
import errorImg from "../assets/error.png";

import { useNavigate } from "react-router-dom";
function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isError, setIsError] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });
  const navigate=useNavigate();

  const handleChange = (value, name) => {
    setBlogData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const createBlogMutation = useMutation((data) => createBlogReq(data), {
    onSuccess: (data) => {
      navigate(`/article/${data.id}`);
    },
    onError : (err) => {
      if (err.response.data.message){
        setIsError(err.response.data.message);
      }else{
        setIsError(err.response.data.errors.undefined[0]);
      }
    }

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    createBlogMutation.mutate(formData);
  };
  return (
    <div className="">
      <div className="text-center w-1/2 mx-auto flex flex-row justify-between p-2 my-5">
        <label className="text-4xl mt-1 font-bold text-gray-500 tracking-wide">
          Create Post
        </label>

        <ButtonUI text="Publish" onClick={handleSubmit} Icon={Publish} />
      </div>
      <ImageUpload onFileChange={handleFileChange} image={Upload} />

      <CreateInput
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="New Post Title Here..."
        content="New Post Content Here..."
      />

      {isError && (
        <div className="w-60 md:w-80 p-2 mx-auto my-16 bg-rose-300 rounded-lg flex items-start">
          <img alt="error" src={errorImg} className="w-5 h-5 mx-4 mt-1" />
          <p>
            {isError}
          </p>
        </div>
      )}
    </div>
  );
}

export default Create;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../../hooks/useBlogData";
import ImageUpload from "../articleCreate/imageUpload";
import CreateInput from "../articleCreate/CreateInput";
import { updateBlogReq } from "../../services/blogService";
import { useMutation,useQueryClient } from "react-query";
import ButtonUI from "../common/ButtonUI";
import UpdateIcon from '../../assets/updateIcon.png'
import errorImg from "../../assets/error.png";

function BlogUpdate() {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isError, setIsError] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useBlogData(id);

  useEffect(() => {
    if (data) {
      setSelectedFile(data.imageUrl);
      setBlogData({
        title: data.title,
        content: data.content,
      });
    }
  }, [data]);


    const handleFileChange = (file) => {
      setSelectedFile(file);
    };

  const handleChange = (value, name) => {
    setBlogData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const updateBlogMutation = useMutation((data)=>updateBlogReq(data.formData, data.id),{
    onSuccess:()=>{
        queryClient.invalidateQueries("blogData");
        navigate(`/article/${id}`);
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
      updateBlogMutation.mutate({ formData, id });
    };



  return (
    <div>
      <div className="text-center w-1/2 mx-auto flex flex-row justify-between p-2 my-5">
        <label className="text-3xl mt-1 font-bold text-gray-500 tracking-wide">
          Update Post
        </label>

        <ButtonUI
          text="Update Post"
          onClick={handleSubmit}
          type="submit"
          Icon={UpdateIcon}
        />
      </div>

      <ImageUpload onFileChange={handleFileChange} image={selectedFile} />

      <CreateInput
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={setBlogData}
        title={blogData.title}
        content={blogData.content}
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

export default BlogUpdate;

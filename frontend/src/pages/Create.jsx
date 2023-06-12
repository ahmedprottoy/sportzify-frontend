import React, { useState } from "react";
import { useMutation } from "react-query";

import { createBlogReq } from "../services/blogService";
import ImageUpload from "../components/create/imageUpload";
import CreateInput from "../components/create/CreateInput";
import Upload from '../assets/upload.svg';
function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (value, name) => {
    console.log(name, value);

    setBlogData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const createBlogMutation = useMutation(createBlogReq);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    createBlogMutation.mutate(formData);
  };
  return (
    <div>
      <div class="text-center w-1/2 mx-auto flex flex-row justify-between p-2">
        <label class="text-2xl mt-1 font-bold text-gray-500 tracking-wide">
          Create Post
        </label>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      <ImageUpload onFileChange={handleFileChange} image={Upload}/>

      <CreateInput
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="New Post Title Here..."
        content="New Post Content Here..."
      />
    </div>
  );
}


export default Create;

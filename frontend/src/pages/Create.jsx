import React, { useState } from "react";
import { useMutation } from "react-query";

import { createBlogReq } from "../services/blogService";
import ImageUpload from "../components/create/imageUpload";
import CreateInput from "../components/create/CreateInput";
function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      <ImageUpload onFileChange={handleFileChange} />

      <CreateInput
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <button onClick={handleSubmit}>post</button>
    </div>
  );
}

export default Create;

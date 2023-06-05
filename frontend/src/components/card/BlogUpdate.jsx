import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../../hooks/useBlogData";
import ImageUpload from "../create/imageUpload";
import CreateInput from "../create/CreateInput";
import { updateBlogReq } from "../../services/blogService";
import { useMutation,useQueryClient } from "react-query";

function BlogUpdate() {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useBlogData(id);

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
    console.log(name, value);

    setBlogData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const updateBlogMutation = useMutation((data)=>updateBlogReq(data.formData, data.id),{
    onSuccess:()=>{
        queryClient.invalidateQueries("blogData");
        navigate(`/article/${id}`);
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

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div class="text-center w-1/2 mx-auto flex flex-row justify-between p-2">
        <label class="text-2xl mt-1 font-bold text-gray-500 tracking-wide">
          Update Post
        </label>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>

      <ImageUpload onFileChange={handleFileChange} image={selectedFile} />

      <CreateInput
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={setBlogData}
        title={blogData.title}
        content={blogData.content}
      />
    </div>
  );
}

export default BlogUpdate;

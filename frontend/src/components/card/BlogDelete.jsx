import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteBlogReq } from "../../services/blogService.js";

function BlogDelete({ blogId, closeModal }) {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteClick = () => {
    if (isChecked) {
      handleDelete();
    }
  };

  const deleteBlogMutation = useMutation(deleteBlogReq, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("userBlogs");
      closeModal();
      navigate("/profile");
    },
  });

  const handleDelete = () => {
    deleteBlogMutation.mutate(blogId);
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl"> Delete This Blog?</p>
      <p className="text-base">
        This action cannot be undone. This will permanently delete the blog and
        remove all content associated with the blog.
      </p>

      <div className="flex flex-col gap-4 ">
        <label htmlFor="confirmCheckbox" className="flex items-center">
          <input
            id="confirmCheckbox"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
            className="mr-2"
          />
          Yes, I'm sure
        </label>
        <div>
          <button
            className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ${
              !isChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDeleteClick}
            disabled={!isChecked}
          >
            Delete
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mx-10" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDelete;

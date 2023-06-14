import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateInput({ blogData, handleChange, handleSubmit,title,content }) {
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: [] }],

        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        [{ color: ["red", "#785412", "blue"] }],
      ],
    };

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "color",
      "image",
      "background",
      "align",
      "size",
      "font",
    ];
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto mb-0 w-1/2 space-y-4">
        <div className="flex flex-col">
          <textarea
            type="text"
            id="title"
            name="title"
            className=" w-full h-auto p-2 mt-5 resize-none  outline-none placeholder-shown:border-gray-100 placeholder:text-4xl placeholder:text-gray-800 placeholder:font-semibold text-4xl font-semibold "
            autoComplete="off"
            placeholder={title}
            value={blogData?.title}
            onChange={(e) => handleChange(e.target.value, "title")}
          />
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder={content}
          onChange={(value) => handleChange(value, "content")}
          value={blogData?.content}
          style={{ height: "300px" }}
        />
      </form>
    </div>
  );
}

export default CreateInput;

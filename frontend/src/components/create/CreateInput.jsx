import React from "react";

function CreateInput({ blogData, handleChange, handleSubmit }) {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label for="title" className="labelField text-lg">
            Title
          </label>

          <div className="relative">
            <input
              type="text"
              id="title"
              name="title"
              className="inputField"
              autoComplete="off"
              value={blogData.title}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label for="title" className="labelField text-lg">
            Content
          </label>

          <div className="relative">
            <input
              type="text"
              id="content"
              name="content"
              className="inputField"
              autoComplete="off"
              value={blogData.content}
              onChange={handleChange}
            />

             
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateInput;

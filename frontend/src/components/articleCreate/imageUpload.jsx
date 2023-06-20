import React, { useState } from "react";



function ImageUpload({ onFileChange,image }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
       onFileChange(file);
    }
  };

  const handleCancelImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 space-y-2">
        <div className="flex items-center justify-center w-full">
          <label className=" relative flex flex-col rounded-lg border-4 border-dashed w-1/2 h-52 p-10 group text-center justify-center">
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
                  <img
                    className="has-mask h-36 object-center"
                    src={image}
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
              <p></p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        </div>
        {selectedImage && (
          <button className="" onClick={handleCancelImage} data-testid="remove-button">
            <p className="text-red-600">Remove</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;

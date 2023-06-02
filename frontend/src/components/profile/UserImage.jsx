import React, { useState } from "react";
import Modal from "../common/Modal.jsx";
import UpdateImage from "./UpdateImage.jsx";

function UserImage(data) {
  const {imageUrl} = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateImage = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-5 w-1/2">
      <img
        src={imageUrl}
        alt="Avatar"
        className="rounded-full object-cover h-80 w-80 border-4 border-double border-gray-800"
      />

      <button
        className="my-5 p-3 rounded-lg bg-gray-300"
        onClick={handleUpdateImage}
      >
        Update Image
      </button>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          content={<UpdateImage closeModal={closeModal} />}
        />
      )}
    </div>
  );
}

export default UserImage;

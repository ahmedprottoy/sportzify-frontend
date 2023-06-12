import React, { useState } from "react";
import Modal from "../common/Modal.jsx";
import Button from "../common/Button";
import UpdateImage from "./UpdateImage";
import UpdatePassword from "./UpdatePassword";

function ProfileButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleImage = () => {
    setIsModalOpen(true);
    setModalContent(<UpdateImage closeModal={closeModal} />);
  };

  const handlePassword = () => {
    setIsModalOpen(true);
    setModalContent(<UpdatePassword closeModal={closeModal} />);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="flex flex-row justify-between mt-10">
      <Button text="Update Image" onClick={handleImage} />
      <Button text="Update Password" onClick={handlePassword} />

      {isModalOpen && <Modal content={modalContent} closeModal={closeModal} />}
    </div>
  );
}

export default ProfileButton;

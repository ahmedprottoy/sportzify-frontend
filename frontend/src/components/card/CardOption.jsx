import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BlogDelete from "./BlogDelete";
import Modal from "../common/Modal";

import DeleteIcon from "../../assets/deleteIcon.png";
import EditIcon from "../../assets/editIcon.png";

function CardOption({ blogId, onClose }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleDelete = () => {
    setModalContent(<BlogDelete blogId={blogId} closeModal={closeModal} />);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    navigate(`/article/update/${blogId}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div ref={optionsRef}>
      <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm absolute top-10 left-5">
        <button
          className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Edit"
          onClick={handleUpdate}
        >
          <img src={EditIcon} alt="delete" className="h-5 w-5" />
        </button>

        <button
          className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Delete"
          onClick={handleDelete}
        >
          <img src={DeleteIcon} alt="delete" className="h-5 w-5" />
        </button>
      </span>

      {isModalOpen && <Modal content={modalContent} closeModal={closeModal} />}
    </div>
  );
}

export default CardOption;

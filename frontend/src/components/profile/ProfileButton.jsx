import React, { useEffect, useRef, useState } from "react";
import Modal from "../common/Modal.jsx";
import UpdateImage from "./UpdateImage";
import UpdatePassword from "./UpdatePassword";
import UpdateInfo from "./UpdateInfo";
import Edit from "../../assets/edit-button.png";
import Image from "../../assets/edit-image.png";
import Password from "../../assets/edit-password.png";
import Info from "../../assets/edit-info.png";

function ProfileButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

    const optionsRef = useRef(null);

    useEffect(() => {
      window.addEventListener("mousedown", handleClickOutside);
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsToggle(false);
      }
    };

  const handleImage = () => {
    setIsModalOpen(true);
    setModalContent(<UpdateImage closeModal={closeModal} />);
  };
  const handleInfo = () => {
    setIsModalOpen(true);
    setModalContent(<UpdateInfo closeModal={closeModal} />);
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
    <div class='absolute top-10 right-10'>
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            <img src={Edit} alt="edit" class="h-5 w-5" />
            Edit Profile
          </button>
        </div>

        {isToggle && (
          <div
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            ref = {optionsRef}
          >
            <div class="py-1" role="none">
              
              <button
                href="#"
                class="text-gray-700 px-4 py-2 text-sm inline-flex gap-x-2"
                onClick={handleImage}
              >
                <img src={Image} alt="image" class="h-5 w-5" />
                Update Profile Image
              </button>
            </div>
            <div class="py-1" role="none">
              <button
                href="#"
                class="text-gray-700 px-4 py-2 text-sm inline-flex gap-x-2"
               onClick={handleInfo}
              >
                <img src={Info} alt="info" class="h-5 w-5" />
                Update Information
              </button>
            </div>
            <div class="py-1" role="none">
              <button
                href="#"
                class="text-gray-700 inline-flex gap-x-2 px-4 py-2 text-sm"
                onClick={handlePassword}
              >
                <img src={Password} alt="info" class="h-5 w-5" />
                Change Password
              </button>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && <Modal content={modalContent} closeModal={closeModal} />}
    </div>
  );
}

export default ProfileButton;
{
  /* 
  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */
}

{
  /* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */
}

import React,{useState} from "react";
import Modal from "../common/Modal.jsx";
import UpdateInfo from "./UpdateInfo.jsx";
import Edit from '../../assets/edit.png'
import Author from "../../assets/writer.png";
import Email from "../../assets/email.png";

function UserInfo({username, fullname, email}) {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateInfo = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
  return (
    <div>
      <div className="mt-20 mx-auto w-[50%] items-center flex flex-col gap-5">
        <div className="flex flex-row gap-5 relative">
          <p className="text-4xl font-semibold">{fullname}</p>
          <button title="Update Information" onClick={handleUpdateInfo}>
            <img src={Edit} alt="edit" className="h-6 mt-2 absolute -top-5" />
          </button>
        </div>
        <div class="flex flex-row gap-2">
          <img src={Author} alt="author" class="h-5" />
          <p class="text-base font-base text-gray-400"> {username}</p>
        </div>
        <div class="flex flex-row gap-2">
          <img src={Email} alt="author" class="h-5" />
          <p class="text-base font-base text-gray-400"> {email}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          content={<UpdateInfo closeModal={closeModal} />}
        />
      )}
    </div>
  );
}

export default UserInfo;

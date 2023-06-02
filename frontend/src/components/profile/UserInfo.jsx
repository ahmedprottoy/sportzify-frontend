import React,{useState} from "react";
import Modal from "../common/Modal.jsx";
import UpdateInfo from "./UpdateInfo.jsx";
import Edit from '../../assets/edit.png'
function UserInfo({username, fullname, email}) {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateInfo = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
  return (
    <div className="flex flex-col gap-3 p-5  w-1/2">
      <div className="flex flex-row gap-5 lg:mt-12">
        <p className="text-4xl font-semibold ">My Profile</p>
        <button onClick={handleUpdateInfo}>
          <img src={Edit} alt="edit" className="h-6 mt-2" />
        </button>
      </div>
      <p className="mt-10">
        <span className="text-2xl font-semibold mr-4">Username:</span>
        {"  "}
        <span className="text-xl">{username}</span>
      </p>
      <p>
        <span className="text-2xl font-semibold mr-4">Full Name:</span>
        {"  "}
        <span className="text-xl">{fullname}</span>
      </p>
      <p>
        <span className="text-2xl font-semibold mr-4">Email:</span>
        {"  "}
        <span className="text-xl">{email}</span>
      </p>

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

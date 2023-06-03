import React, { useState,useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import { getUserDataReq } from "../services/userService";
import Modal from "../components/common/Modal";
import UserImage from "../components/profile/UserImage";
import UserInfo from "../components/profile/UserInfo";
import UpdatePassword from "../components/profile/UpdatePassword";

function Profile() {
  const { username } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdatePassword = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };



  const { data, isLoading, isError, error } = useQuery(
    "userData",
    () => getUserDataReq(username),
    {
      enabled: !!username, 
      onError: (error) => {
        console.error("User data error:", error);
      },
    }
  );

  if (isLoading ) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="flex flex-row">
      <UserImage imageUrl={data?.imageUrl} />

      <div className="flex flex-col w-1/2">
        <UserInfo
          username={data?.username}
          fullname={data?.fullname}
          email={data?.email}
        />
        <button onClick={handleUpdatePassword} className="w-40 p-2 rounded-lg mt-10 mx-5 bg-gray-300">Change Password</button>

        {isModalOpen && (
          <Modal
            closeModal={closeModal}
            content={<UpdatePassword closeModal={closeModal} />}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;

import React, { useState,useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import { getUserDataReq, getUserBlogReq } from "../services/userService";
import Modal from "../components/common/Modal";
import UserImage from "../components/profile/UserImage";
import UserInfo from "../components/profile/UserInfo";
import UpdatePassword from "../components/profile/UpdatePassword";
import UserBlogs from "../components/profile/UserBlogs";

function Profile() {
  const { username } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdatePassword = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };



  const { data:userData, isLoading:userDataLoading, isError:userDataIsError, error:userDataError } = useQuery(
    "userData",
    () => getUserDataReq(username),
    {
      enabled: !!username, 
      onError: (error) => {
        console.error("User data error:", error);
      },
    }
  );

  const {
    data: userBlogs,
    isLoading: userBlogsLoading,
    isError: userBlogsIsError,
    error: userBlogsError,
  } = useQuery("userBlogs", () => getUserBlogReq(username), {
    enabled: !!username,
    onError: (error) => {
      console.error("User blogs error:", error);
    },
  });

  if (userDataLoading || userBlogsLoading ) {
    return <h1>Loading...</h1>;
  }

  if (userDataIsError || userBlogsIsError) {
    return <h1>Error: {userDataError.message || userBlogsError}</h1>;
  }

  return (
    <div>
      <div className="flex flex-row">
        <UserImage imageUrl={userData?.imageUrl} />

        <div className="flex flex-col w-1/2">
          <UserInfo
            username={userData?.username}
            fullname={userData?.fullname}
            email={userData?.email}
          />
          <button
            onClick={handleUpdatePassword}
            className="w-40 p-2 rounded-lg mt-10 mx-5 bg-gray-300"
          >
            Change Password
          </button>

          {isModalOpen && (
            <Modal
              closeModal={closeModal}
              content={<UpdatePassword closeModal={closeModal} />}
            />
          )}
        </div>
      </div>

      <UserBlogs userBlogs={userBlogs}/>
    </div>
  );
}

export default Profile;

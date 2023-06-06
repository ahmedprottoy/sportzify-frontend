import React, { useState,useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import { getUserDataReq, getUserBlogReq } from "../services/userService";
import UserImage from "../components/profile/UserImage";
import UserInfo from "../components/profile/UserInfo";
import ProfileBackground from '../assets/pro-back.jpg'
import UserBlogs from "../components/profile/UserBlogs";
import Cloud from "../assets/pro-bg.jpg";
import ProfileButton from "../components/profile/ProfileButton";

function Profile() {
  const { username } = useContext(AuthContext);




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
    onSuccess: (data) => {
      // console.log("User blogs:", data);
    }

  });

  // if (userDataLoading || userBlogsLoading ) {
  //   return <h1>Loading...</h1>;
  // }

  // if (userDataIsError || userBlogsIsError) {
  //   return <h1>Error: {userDataError.message || userBlogsError}</h1>;
  // }

  return (
    <div className=" bg-slate-100 ">
      <div>
        {/* <object className="w-full h-[37vh] object-cover" data={Upload} type="image/svg+xml"/> */}
        <img src={ProfileBackground} alt="bg" className="h-[40vh] w-full object-cover " />
      </div>

      <div className="w-[70%] bg-white rounded-lg shadow-lg p-4 mx-auto  mt-5 relative">
        <UserImage imageUrl={userData?.imageUrl} />

        <ProfileButton />

        <UserInfo
          username={userData?.username}
          fullname={userData?.fullname}
          email={userData?.email}
        />

        <hr className="border-1 border-solid border-x-slate-400 w-full my-5"/>
      </div>

      <div className="w-[70%] bg-white rounded-lg shadow-lg p-4 mx-auto  mt-5 relative">
        <UserBlogs userBlogs={userBlogs} />
      </div>
    </div>
  );
}

export default Profile;


     
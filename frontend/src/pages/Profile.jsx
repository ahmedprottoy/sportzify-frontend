import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { getUserDataReq, getUserBlogReq } from "../services/userService";
import UserImage from "../components/profile/UserImage";
import UserInfo from "../components/profile/UserInfo";
import ProfileBackground from "../assets/profile-back.svg";
import UserBlogs from "../components/profile/UserBlogs";
import ProfileButton from "../components/profile/ProfileButton";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Profile() {
  const { username } = useParams();

  const {username : loggedUsername} = useContext(AuthContext)

  const {
    data: userData,
    isLoading: userDataLoading,
    isError: userDataIsError,
    error: userDataError,
    refetch: userDataRefetch,
  } = useQuery("userData", () => getUserDataReq(username), {
    enabled: !!username,
    onError: (error) => {
      console.error("User data error:", error);
    },
  });

  const {
    data: userBlogs,
    isLoading: userBlogsLoading,
    isError: userBlogsIsError,
    error: userBlogsError,
    refetch: userBlogsRefetch,
  } = useQuery("userBlogs", () => getUserBlogReq(username), {
    enabled: !!username,
    onError: (error) => {
      console.error("User blogs error:", error);
    },
    onSuccess: (data) => {
      // console.log("User blogs:", data);
    },
  });
  
  
  useEffect(() => {
    userDataRefetch();
    userBlogsRefetch();
  }, [username]);

  return (
    <div>
      <div>
        <img
          src={ProfileBackground}
          alt="bg"
          className="h-[40vh] w-full object-cover "
        />
      </div>

      <div className="w-[70%] bg-white rounded-lg shadow-2xl p-4 mx-auto  -mt-20 relative">
        <UserImage imageUrl={userData?.imageUrl} />


        {username === loggedUsername && (
        <ProfileButton />
         
         )}

        <UserInfo
          username={userData?.username}
          fullname={userData?.fullname}
          email={userData?.email}
        />

        <hr className="border-1 border-solid border-x-slate-400 w-full my-5" />
      </div>

      <div className="w-[70%] bg-white rounded-lg shadow-2xl p-4 mx-auto  my-5 relative ">
        <UserBlogs userBlogs={userBlogs?.data} />
      </div>
    </div>
  );
}

export default Profile;

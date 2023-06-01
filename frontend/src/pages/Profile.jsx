import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import { getUserDataReq } from "../services/userService";
import UserImage from "../components/profile/UserImage";

function Profile() {
  const { username } = useContext(AuthContext);

  const { data, isLoading, isError,error } = useQuery(
    "userData",
    () => getUserDataReq(username),
    {
      onSuccess: (data) => {
        console.log("User data:", data);
      },
    }
  );

  return (
    <div>
      <UserImage />
    </div>
  );
}

export default Profile;

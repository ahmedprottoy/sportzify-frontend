import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import { getUserDataReq } from "../services/userService";
import UserImage from "../components/profile/UserImage";

function Profile() {
  const { username } = useContext(AuthContext);

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
    <div>
      <UserImage imageUrl={data?.imageUrl} />
    </div>
  );
}

export default Profile;

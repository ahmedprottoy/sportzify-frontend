import React, { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import Button from "../common/Button";
import { AuthContext } from "../../context/authContext";
import { updateUserDataReq } from "../../services/userService.js";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../common/ButtonUI";

function UpdateInfo({ closeModal }) {
  const { username, setUsername } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [userData, setUserData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userDataMutation.mutate({ userData, username });
  };

  const userDataMutation = useMutation(
    (data) => updateUserDataReq(data.userData, data.username),
    {
      onSuccess: (data) => {
        setUsername(data.username);
        console.log(username)
        queryClient.invalidateQueries("userData");
        closeModal();
        navigate(`/profile/${data.username}`);
      },
    }
  );

  return (
    <div>
      {" "}
      <h1 className="text-4xl font-semibold">Update Info</h1>
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-6 gap-6 ">
        <div className="col-span-6 sm:col-span-3">
          <label  className="labelField">
            Full Name
          </label>

          <input
            type="text"
            id="fullname"
            name="fullname"
            className="inputField"
            autoComplete="off"
            value={userData.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6">
          <label className="labelField">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="inputField"
            autoComplete="off"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="labelField">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="inputField"
            autoComplete="off"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
      </form>
      <ButtonUI
        text="Update Info"
        onClick={handleSubmit}
        type="submit"
        className="mt-5"
      />
    </div>
  );
}

export default UpdateInfo;

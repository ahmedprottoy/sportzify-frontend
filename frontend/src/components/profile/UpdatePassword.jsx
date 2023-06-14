import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import Button from "../common/Button";
import { updatePasswordReq } from "../../services/userService";
import { AuthContext } from "../../context/authContext";

function UpdatePassword({ closeModal }) {
  const { username } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updatePasswordMutation = useMutation(
    (data) => updatePasswordReq(data.userData, data.username),
    {
      onSuccess: (data) => {
        closeModal();
      },

      onError: (error) => {
        console.error("Update password error:", error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.newPassword !== userData.confirmPassword) {
      console.log("Password not matched");
      return;
    }
    updatePasswordMutation.mutate({ userData, username });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
        <div>
          <label for="password" className="labelField text-lg">
            Old Password
          </label>

          <div className="relative">
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className="inputField"
              autoComplete="off"
              value={userData.oldPassword}
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" className="labelField text-lg">
            New Password
          </label>

          <div className="relative">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="inputField"
              autoComplete="off"
              value={userData.newPassword}
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" className="labelField text-lg">
            Conform New Password
          </label>

          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="inputField"
              autoComplete="off"
              value={userData.confirmPassword}
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <Button text="Update" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default UpdatePassword;

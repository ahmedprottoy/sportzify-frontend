import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import SignUpCover from "../components/signup/SignUpCover";
import SignUpForm from "../components/signup/SignUpForm";
import { signUpReq } from "../services/authService.js";
import { AuthContext } from "../context/authContext";

function SignUp() {
  const { setUsername, setIsLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const signUpMutation = useMutation(signUpReq, {
    onSuccess: (data) => {
      setUsername(data.data.username);
      setIsLoggedIn(true);
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    signUpMutation.mutate(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white" data-testid="signup-page">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <SignUpCover />

        <SignUpForm
          userData={userData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isloading={signUpMutation.isLoading}
          isError={signUpMutation.isError}
          error={signUpMutation.error}
        />
      </div>
    </div>
  );
}

export default SignUp;

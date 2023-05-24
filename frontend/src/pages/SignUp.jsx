import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import SignUpCover from "../components/signup/SignUpCover.jsx";
import SignUpForm from "../components/signup/SignUpForm.jsx";
import signUpReq from "../services/authService.js";

function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const signUpMutation = useMutation(signUpReq,{
    onSuccess: () => {
      navigate("/");
    },
    // onError: (error) => {
    //   console.log(error.response.data);
    // }

  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      console.log("something");
      console.log(userData.password);
      console.log(userData.confirmPassword);
    }

    signUpMutation.mutate(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  return (
    <section className="bg-white">
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
    </section>
  );
}

export default SignUp;

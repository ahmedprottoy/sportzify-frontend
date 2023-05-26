import React, { useState,useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import SignUpCover from "../components/signup/SignUpCover.jsx";
import SignUpForm from "../components/signup/SignUpForm.jsx";
import {signUpReq} from "../services/authService.js";
import {AuthContext } from '../context/authContext.jsx'

function SignUp() {

 const { setUsername,setIsloggedIn } = useContext(AuthContext);
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
      setIsloggedIn(true);
      navigate("/");
    },
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

import React,{useState} from "react";
import { useMutation } from "react-query";
import signUpLogo from "../assets/signup-logo.png";
import signUpBG from "../assets/signup-bg3.jpg";
import Button from "../components/Button.jsx";
import axios from "axios";

function SignUp() {

    const [userData,setUserData] = useState({
        username:"",
        fullname:"",
        email:"",
        password:"",
        passwordConfirmation:""
    });
const signupMutation = useMutation((userData) =>
  axios.post("http://localhost:4001/api/v1/auth/sign-up", userData)
);
      const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
        console.log("password didn't match.")
        }
        
        signupMutation.mutate(userData);
      };


        const handleChange = (e) => {
          const { name, value } = e.target;
          console.log(name, value)
          setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
          }));
        };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={signUpBG}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          <div className="hidden lg:relative lg:block lg:p-12  ">
            <h2 className="text-2xl font-bold text-white font-kalam sm:text-3xl md:text-6xl">
              Welcome to Sportzify
            </h2>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <img
              className="h-8 sm:h-24 hidden lg:block"
              alt="logo"
              src={signUpLogo}
            />
            <div className="relative -mt-16 block lg:hidden">
              <img className="h-24 mt-10 sm:h-24" alt="logo" src={signUpLogo} />
              <h1 className="mt-1 text-2xl font-kalam font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Sportzify
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label for="username" className="labelField">
                  Username
                </label>

                <input
                  type="text"
                  id="username"
                  name="username"
                  className="inputField"
                  autoComplete="off"
                  value={userData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="fullname" className="labelField">
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
                <label for="email" className="labelField">
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
                <label for="password" className="labelField">
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

              <div className="col-span-6 sm:col-span-3">
                <label for="passwordConfirmation" className="labelField">
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  className="inputField"
                  autoComplete="off"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  text="Sign Up"
                />
                

                
                <p className="mt-4 text-md text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className=" text-lg ml-3 text-sky-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUp;

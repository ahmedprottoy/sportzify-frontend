import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import errorImg from "../../assets/error.png";

import signInLogo from "../../assets/signup-logo.png";

const signInForm = (props) => {
  const { userData, handleSubmit, handleChange, isloading, isError, error } =
    props;

  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className=" max-w-xs mx-auto ">
        <img
          alt="login"
          src={signInLogo}
          className="h-8 sm:h-24 hidden lg:block"
        />
        <h1 className="text-2xl font-bold sm:text-6xl font-kalam">Sportzify</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label for="email" className="labelField text-lg">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="inputField"
              autoComplete="off"
              value={userData.email}
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" className="labelField text-lg">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="inputField"
              autoComplete="off"
              value={userData.password}
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

        <div className="flex justify-between flex-col gap-3">
          <Button text="Sign In" disabled={isloading} />
          <p className="mt-4 text-md text-gray-500 sm:mt-0">
            Don't have an account?
            <Link
              to="/sign-up"
              className=" text-lg ml-3 text-sky-700 underline"
            >
              Sign Up
            </Link>
            .
          </p>
          {isError && (
            <div className="w-60 md:w-80 p-2 bg-rose-300 rounded-lg flex items-start">
              <img alt="error" src={errorImg} className="w-5 h-5 mx-4 mt-1" />
              <p>
                {error.response.data.message ||
                  error.response.data.errors.undefined[0]}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default signInForm;

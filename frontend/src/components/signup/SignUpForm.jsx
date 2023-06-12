import React from 'react'
import signUpLogo from '../../assets/signup-logo.png'
import Button from '../common/Button.jsx'
import errorImg from "../../assets/error.png";
import {Link} from 'react-router-dom'

const signUpForm  = (props) => {

    const { userData, handleSubmit, handleChange, isloading, isError,error } = props;

    return (
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-9 lg:px-16 lg:py-12 xl:col-span-6"
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
            className="mt-8 grid grid-cols-6 gap-6 p-4"
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
                id="confirmPassword"
                name="confirmPassword"
                className="inputField"
                autoComplete="off"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Button text="Sign Up" disabled={isloading} />

              <p className="mt-4 text-md text-gray-500 sm:mt-0">
                Already have an account?
                <Link
                  to="/sign-in"
                  className=" text-lg ml-3 text-sky-700 underline"
                >
                  Log in
                </Link>
                .
              </p>
            </div>
          </form>
          {isError && (
            <div className="w-96 p-2 bg-rose-300 rounded-lg flex items-start ml-4">
              <img alt="error" src={errorImg} className="w-5 h-5 mx-4 mt-1" />
              <p>{error.response.data.errors.undefined[0]}</p>
            </div>
          )}
        </div>
      </main>
    );
}

export default signUpForm;
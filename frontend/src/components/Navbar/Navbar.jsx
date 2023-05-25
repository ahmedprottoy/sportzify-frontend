import React, { useState } from "react";
import userImage from "../../assets/signup-logo.png";
import logo from "../../assets/signup-logo.png";
import NavSearchBox from "./NavSearchBox";
import { Link } from "react-router-dom";
import NavSideBar from "./NavSideBar";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header
      aria-label="Site Header"
      className="shadow-lg sticky top-0 bg-white"
    >
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1 flex-row">
            <img src={logo} alt="logo" className="h-16 mr-5" />
            <a href="#" className="mt-4">
              <span className="text-2xl font-semibold mt-11 font-kalam">
                Sportzify
              </span>
            </a>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <Link className="text-gray-500 text-lg" to="/">
              Home
            </Link>
            <Link className="text-gray-500 text-lg" to="">
              Write
            </Link>
            <Link className="text-gray-500 text-lg" to="">
              Profile
            </Link>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 md:flex relative">
            {/* <Link
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              to="/sign-in"
            >
              Log in
            </Link>

            <Link
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              to="/sign-up"
            >
              Sign up
            </Link> */}

            <NavSearchBox />

            <button class="block shrink-0" onClick={handleDropdownToggle}>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-10 w-10 rounded-full object-cover"
              />
            </button>
            {isDropdownOpen && (
              <div className="top-12 right-4  bg-gray-200 rounded-lg shadow-lg absolute">
                <a
                  href="#"
                  className="block px-3 py-1  text-gray-700 border-4 rounded-lg text-sm font-bold border-gray-400  hover:bg-gray-100 "
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
              onClick={handleDropdownToggle}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>

          {/* <NavSideBar /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

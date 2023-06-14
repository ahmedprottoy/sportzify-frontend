import React from 'react'
import { Link } from 'react-router-dom';


function NavButtons() {
  return (
    <div>
      <Link
        to="/sign-in"
        className="relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group mr-5"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease text-base">
          Log In
        </span>
        <span className="relative invisible">Button Text</span>
      </Link>

      <Link
        to="/sign-up"
        className="relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-gray-500 bg-gray-500 rounded-full shadow-md group mr-5"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-base">
          Sign Up
        </span>
        <span className="relative invisible">Button Text</span>
      </Link>
    </div>
  );
}

export default NavButtons;





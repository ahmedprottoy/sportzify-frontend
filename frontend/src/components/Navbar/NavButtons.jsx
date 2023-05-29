import React from 'react'
import { Link } from 'react-router-dom';


function NavButtons() {
  return (
    <div>
      <Link
        to="/sign-in"
        class="relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cyan-500 rounded-full shadow-md group mr-5"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease text-base">
          Log In
        </span>
        <span class="relative invisible">Button Text</span>
      </Link>

      <Link
        to="/sign-up"
        class="relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-cyan-500 bg-cyan-500 rounded-full shadow-md group mr-5"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-base">
          Sign Up
        </span>
        <span class="relative invisible">Button Text</span>
      </Link>
    </div>
  );
}

export default NavButtons;





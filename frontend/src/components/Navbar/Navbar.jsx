import React, { useContext } from "react";
import logo from "../../assets/signup-logo.png";
import NavSearchBox from "./NavSearchBox";
import NavButtons from "./NavButtons";
import NavSideBar from "./NavSideBar";
import NavOptions from "./NavOptions";
import NavUser from "./NavUser";

import { AuthContext } from "../../context/authContext.jsx";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("navbar")

  return (
    <header
      aria-label="Site Header"
      className="shadow-lg sticky top-0 z-10 bg-white"
    >
      <div className="mx-auto max-w-screen-xl p-2">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1 flex-row">
            <img src={logo} alt="logo" className="h-16 mr-5" />
            <a href="#" className="mt-4">
              <span className="text-2xl font-semibold mt-11 font-kalam">
                Sportzify
              </span>
            </a>
          </div>

          <NavOptions />

          <div className="hidden flex-1 items-center justify-end gap-4 md:flex relative">
            {isLoggedIn ? (
              <>
                <NavSearchBox />
                <NavUser />
              </>
            ) : (
              <NavButtons />
            )}
          </div>

          <div className="md:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
              // onClick={handleDropdownToggle}
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

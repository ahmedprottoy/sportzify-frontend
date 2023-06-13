import React, { useContext } from "react";
import logo from "../../assets/signup-logo.png";
import NavSearchBox from "./NavSearchBox.jsx";
import NavButtons from "./NavButtons.jsx";
import NavOptions from "./NavOptions.jsx";
import NavUser from "./NavUser.jsx";

import { AuthContext } from "../../context/authContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header className="shadow-lg sticky top-0 z-10 bg-white">
      <div className="mx-auto max-w-screen-xl p-2">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1 flex-row">
            <img src={logo} alt="logo" className="h-16 mr-5" />
            <Link to="/" className="mt-4">
              <span className="text-2xl font-semibold mt-11 font-kalam">
                Sportzify
              </span>
            </Link>
          </div>

          <NavOptions />

          <div className=" flex-1 items-center justify-end gap-4 flex relative">
            {isLoggedIn ? (
              <>
                <NavSearchBox />
                <NavUser />
              </>
            ) : (
              <NavButtons />
            )}
          </div>

          

       
        </div>
      </div>
    </header>
  );
};

export default Navbar;

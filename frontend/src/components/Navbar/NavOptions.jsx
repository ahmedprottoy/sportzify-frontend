import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function NavOptions() {
  const { username } = useContext(AuthContext);
  return (
    <nav aria-label="Site Nav" className=" gap-8 text-sm font-medium flex">
      <Link to="/" className="text-gray-500 text-lg">
        Home
      </Link>
      <Link to="/create" className="text-gray-500 text-lg">
        Create
      </Link>
      <Link to={`/profile/${username}`} className="text-gray-500 text-lg">
        Profile
      </Link>
    </nav>
  );
}

export default NavOptions;

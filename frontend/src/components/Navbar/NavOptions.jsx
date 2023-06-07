import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";


function NavOptions() {
  const { username } = useContext(AuthContext);
  return (
    <nav
      aria-label="Site Nav"
      className="hidden gap-8 text-sm font-medium md:flex"
    >
      <Link className="text-gray-500 text-lg" to="/home">
        Home
      </Link>
      <Link className="text-gray-500 text-lg" to="/create">
        Create
      </Link>
      <Link className="text-gray-500 text-lg" to={`/profile/${username}`}>
        Profile
      </Link>
    </nav>
  );
}

export default NavOptions
import React from 'react'
import { Link } from "react-router-dom";
function NavOptions() {
  return (
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
  );
}

export default NavOptions
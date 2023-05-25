import React from 'react'
import { Link } from 'react-router-dom';


function NavButtons() {
  return (
    <div>
      <Link
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
      </Link>
    </div>
  );
}

export default NavButtons
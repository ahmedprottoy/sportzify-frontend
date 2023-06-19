import React from "react";
import NoUser from "../../assets/404.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center" >
      <img src={NoUser} alt="no user" type="image/svg+xml" className="h-96 w-96" data-testid='not-found-user'/>
      <p className="text-3xl font-semibold my-1">User Not Found</p>
    </div>
  );
}

export default NotFound;

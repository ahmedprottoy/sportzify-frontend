import React from "react";
import signInBG from "../../assets/signup-bg4.jpg";

const signInCover = () => {
  return (
    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src={signInBG}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export default signInCover;

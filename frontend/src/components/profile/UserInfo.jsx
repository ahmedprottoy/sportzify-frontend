import React, { useState } from "react";

import Author from "../../assets/writer.png";
import Email from "../../assets/email.png";

function UserInfo({ username, fullname, email }) {
  return (
    <div>
      <div className="mt-32 mx-auto w-[50%] items-center flex flex-col gap-5">
        <div>
          <p className="text-4xl font-semibold">{fullname}</p>
        </div>
        <div className="flex flex-row gap-2">
          <img
            src={Author}
            alt="author"
            className="h-5"
            data-testid="author-icon"
          />
          <p className="text-base font-base text-gray-400"> {username}</p>
        </div>
        <div className="flex flex-row gap-2">
          <img
            src={Email}
            alt="author"
            className="h-5"
            data-testid="email-icon"
          />
          <p className="text-base font-base text-gray-400"> {email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;

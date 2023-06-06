import React, { useState } from "react";
import Modal from "../common/Modal.jsx";
import UpdateImage from "./UpdateImage.jsx";

function UserImage(data) {
  const {imageUrl} = data;

  return (
    <div className="w-52 h-52 rounded-full bg-slate-100 border-4 border-slate-200 absolute -top-24 left-0 right-0 m-auto">
      <img
        src={imageUrl}
        alt="cf"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}

export default UserImage;

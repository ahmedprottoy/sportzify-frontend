import React, { useState } from "react";
import NoImage from '../../assets/NoImage.jpg'

function UserImage(data) {
  const {imageUrl} = data;
if (!imageUrl){

}

  return (
    <div
      className="w-52 h-52 rounded-full bg-slate-100 border-4 border-slate-200 absolute -top-24 left-0 right-0 m-auto"
      data-testid="user-image-container"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="cf"
          className="w-full h-full object-cover rounded-full"
          data-testid="user-image"
        />
      ) : (
        <img
          src={NoImage}
          alt="noImage"
          className="w-full h-full object-cover rounded-full"
          data-testid="no-user-image"
        />
      )}
    </div>
  );
}

export default UserImage;

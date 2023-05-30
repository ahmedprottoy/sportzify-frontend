import React, { useState, useContext } from "react";
import Option from '../../assets/menu4.png'
import CardOption from "./CardOption";
import {AuthContext} from '../../context/authContext.jsx'

function card2({blog}) {
  const { isLoggedIn } = useContext(AuthContext);
  

  const [toggle,setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div class="group relative block bg-black lg:w-80 rounded-lg lg:h-96 border-2 border-gray-700 m-5">
      <img
        alt="Developer"
        src={blog.imageUrl}
        class="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-50"
      />

      <div href="#" class="relative">
        {isLoggedIn && (
          <img
            src={Option}
            alt="option"
            class="h-5 absolute top-5 left-2 cursor-pointer "
            onClick={handleToggle}
          />
        )}
        {toggle && <CardOption />}
        <p class="text-xl font-bold p-3 text-white sm:text-2xl ml-5">
          {blog.author}
        </p>
        <div className="flex flex-col absolute top-0 right-0 p-2 rounded-lg text-slate-100 bg-indigo-400 text-sm lg:text-base">
          <span>{blog.postedAt.date}</span>
          <span>{blog.postedAt.month}</span>
          <span>{blog.postedAt.year}</span>
        </div>
      </div>

      <div class="translate-y-0 transform transition-all group-hover:-translate-y-28 group-hover:opacity-100 duration-500">
        <p
          className="text-sm text-white line-clamp-4 "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></p>
      </div>
      <div class="p-2 mt-36 translate-y-0 transform transition-all group-hover:-translate-y-28 group-hover:opacity-100 duration-500">
        <p class="text-white text-xl mb-3 line-clamp-3">{blog.title}</p>
      </div>
    </div>
  );
}

export default card2;

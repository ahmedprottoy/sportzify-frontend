import React, { useState, useContext } from "react";
import Option from "../../assets/menu4.png";
import CardOption from "./CardOption";
import { AuthContext } from "../../context/authContext.jsx";
import { Link } from "react-router-dom";

function card({ blog }) {
  const { isLoggedIn } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div class="shadow-xl group relative block lg:w-80 rounded-lg lg:h-96 m-5 overflow-hidden">
      <img
        alt="Developer"
        src={blog.imageUrl}
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute z-0 bg-gradient-to-t from-black to-transparent inset-0" />

      <div class="relative">
        {isLoggedIn && (
          <img
            src={Option}
            alt="option"
            class="h-3 absolute top-6 left-2 cursor-pointer "
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

      <Link
        to={`/article/${blog.id}`}
        class="cursor-pointer"
       
      >
        <div class="absolute  top-48 opacity-0 px-2 py-4 translate-y-0  transform transition-all group-hover:translate-y-20 ease-in group-hover:opacity-100 duration-300">
          <p
            className="text-sm text-gray-300 line-clamp-4 "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></p>
        </div>
        <div class="px-2 py-4  font-semibold mt-56 translate-y-0 transform transition-all group-hover:-translate-y-28 group-hover:opacity-100 duration-300 ease-in ">
          <p class="text-white text-xl mb-3 line-clamp-3">{blog.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default card;

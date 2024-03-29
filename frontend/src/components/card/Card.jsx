import React, { useState, useContext } from "react";
import Option from "../../assets/menu4.png";
import CardOption from "./CardOption";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'

function card({ blog }) {
  const { username } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="shadow-xl group relative block lg:w-80 rounded-lg lg:h-96 m-5 overflow-hidden">
      {blog.imageUrl ? (
        <img
          alt="Developer"
          src={blog.imageUrl}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <img
          alt="Developer"
          src="https://picsum.photos/200?grayscale"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute z-0 bg-gradient-to-t from-black to-transparent inset-0" />

      <div className="relative">
        {username === blog.author && (
          <img
            src={Option}
            alt="option"
            className="h-3 absolute top-6 left-2 cursor-pointer "
            onClick={handleToggle}
          />
        )}
        {toggle && (
          <CardOption blogId={blog.id} onClose={() => setToggle(false)} />
        )}
        <p className="text-xl font-bold p-3 text-white sm:text-2xl ml-5">
          {blog.author}
        </p>
        <div className="flex flex-col absolute top-0 right-0 p-2 rounded-lg text-slate-100 bg-indigo-400 text-sm lg:text-base">
          <span> {dayjs(blog?.postedAt).format('DD')}</span>
          <span> {dayjs(blog?.postedAt).format('MMM')}</span>
          <span> {dayjs(blog?.postedAt).format('YYYY')}</span>
        </div>
      </div>

      <Link to={`/article/${blog.id}`} className="cursor-pointer">
        <div className="absolute  top-48 opacity-0 px-2 py-4 translate-y-0  transform transition-all group-hover:translate-y-20 ease-in group-hover:opacity-100 duration-300">
          <p
            className="text-sm text-gray-300 line-clamp-4 "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></p>
        </div>
        <div className="px-2 py-4  font-semibold mt-56 translate-y-0 transform transition-all group-hover:-translate-y-28 group-hover:opacity-100 duration-300 ease-in ">
          <p className="text-white text-xl mb-3 line-clamp-3">{blog.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default card;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../hooks/useBlogData.js";
import Author from "../assets/writer.png";
import Date from "../assets/calendar.png";
import ErrorNotFound from "./ErrorNotFound.jsx";
import ButtonUI from "../components/common/ButtonUI.jsx";
import Back from "../assets/reply.png";
import UpdatedBlog from '../assets/updatedBlog.png'

import '../style/articleRender.css'
import { twMerge } from "tailwind-merge";

function Article() {
  const { id } = useParams();
  const { data, isError } = useBlogData(id);
  const navigate = useNavigate();


  if (isError) {
    return <ErrorNotFound />;
  }

  return (
    <div className="p-10 m-8 shadow-2xl rounded-md  lg:mx-auto lg:w-1/2 w-full flex flex-col bg-[#fdfdfd]">
      {data?.imageUrl ? (
        <img
          alt="Developer"
          src={data.imageUrl}
          className="h-96 w-full object-cover rounded-md"
          loading="lazy"
        />
      ) : (
        <img
          alt="Developer"
          src="https://picsum.photos/2000/3000?grayscale"
          className="h-96 w-full object-cover rounded-md"
          loading="lazy"
        />
      )}

      <p className="text-4xl mt-10 font-semibold">{data?.title}</p>

      <div className="flex flex-row justify-between mt-10 mb-4 border-l-2 p-2 border-gray-300 border-solid">
        <button
          className="flex flex-row gap-2 mt-5"
          onClick={() => {
            navigate(`/profile/${data.author}`);
          }}
        >
          <img src={Author} alt="author" className="h-7" />
          <p className="text-xl font-medium text-gray-500"> {data?.author}</p>
        </button>

        <div>
          <div className="flex flex-row gap-2 my-2">
            <img src={Date} alt="author" className="h-6" />
            <p className="text-base font-extralight text-gray-500">
              Posted : {data?.postedAt.date} {data?.postedAt.month},
              {data?.postedAt.year} || {data?.postedAt.hour}:
              {data?.postedAt.minute} {data?.postedAt.period}
            </p>
          </div>

          <div className="flex flex-row gap-2 mt-2">
            <img src={UpdatedBlog} alt="author" className="h-6" />
            <p className="text-base font-extralight text-gray-500">
              Updated : {data?.updatedAt.date} {data?.updatedAt.month},
              {data?.updatedAt.year} || {data?.updatedAt.hour}:
              {data?.updatedAt.minute} {data?.updatedAt.period}
            </p>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          "mt-5 first-letter:text-4xl first-letter:font-bold text-xl font-nunito",
          "rich-content"
        )}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <ButtonUI
        text="Go Back"
        onClick={() => {
          navigate(-1);
        }}
        Icon={Back}
        className="w-32 mt-10"
      />
    </div>
  );
}

export default Article;

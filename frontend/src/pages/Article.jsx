import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../hooks/useBlogData.js";
import Author from "../assets/writer.png";
import Date from "../assets/calendar.png";
import ErrorNotFound from "./ErrorNotFound.jsx";
import ButtonUI from "../components/common/ButtonUI.jsx";
import Back from "../assets/reply.png";

function Article() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBlogData(id);
  const navigate = useNavigate();

  if (isError) {
    return <ErrorNotFound />;
  }

  return (
    <div class="p-3  lg:mx-auto lg:w-1/2 w-full flex flex-col">
      {data?.imageUrl ? (
        <img
          alt="Developer"
          src={data.imageUrl}
          class="h-96 w-full object-cover rounded-md"
          loading="lazy"
        />
      ) : (
        <img
          alt="Developer"
          src="https://picsum.photos/2000/3000?grayscale"
          class="h-96 w-full object-cover rounded-md"
          loading="lazy"
        />
      )}
      <hr class="my-5 border-1 border-[#484848] border-dashed" />

      <p class="text-4xl font-semibold">{data?.title}</p>

      <div class="flex flex-row justify-between my-5">
        <button
          class="flex flex-row gap-2"
          onClick={() => {
            navigate(`/profile/${data.author}`);
          }}
        >
          <img src={Author} alt="author" class="h-5" />
          <p class="text-base font-extralight"> {data?.author}</p>
        </button>
        <div class="flex flex-row gap-2">
          <img src={Date} alt="author" class="h-5" />
          <p class="text-base font-extralight">
            {" "}
            {data?.postedAt.date} {data?.postedAt.month},{data?.postedAt.year}
          </p>
        </div>
      </div>

      <p
        class="my-10 first-letter:text-5xl"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></p>

      <ButtonUI
        text="Go Back"
        onClick={() => {
          navigate(-1);
        }}
        Icon={Back}
        className="w-32"
      />
    </div>
  );
}

export default Article;

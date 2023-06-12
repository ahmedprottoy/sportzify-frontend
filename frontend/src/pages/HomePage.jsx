import React from "react";
import {useQuery} from 'react-query';
import {getBlogsReq} from '../services/blogService.js'
import Card from "../components/card/Card.jsx";

function HomePage() {
  const { isLoading, isError, data, error } = useQuery("blogs", getBlogsReq);




  return (
    <div>
      <div className="container mx-auto flex flex-wrap ">
        {data?.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

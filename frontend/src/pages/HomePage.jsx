import React, { useState } from "react";
import {useQuery} from 'react-query';
import {getBlogsReq} from '../services/blogService.js'
import Card from "../components/card/Card.jsx";

function HomePage() {
  const pageSize = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);


  const { isLoading, isError, data, error } = useQuery("blogs", getBlogsReq);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <div className="container mx-auto flex flex-wrap ">
        {paginatedData?.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

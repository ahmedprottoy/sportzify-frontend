import React from "react";
import Card from "../card/Card";

function UserBlogs({ userBlogs }) {
  if (!userBlogs) {
    return <div>....</div>;
  }

  return (
    <div>
      <div className="container mx-auto flex flex-wrap justify-evenly">
        {userBlogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default UserBlogs;

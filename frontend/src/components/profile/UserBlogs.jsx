import React from 'react'
import Card from '../card/Card.jsx'

function UserBlogs({ userBlogs}) {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap ">
        {userBlogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default UserBlogs
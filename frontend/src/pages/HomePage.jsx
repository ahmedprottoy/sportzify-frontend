import React from "react";
import Navbar from '../components/Navbar/Navbar.jsx'
import Card from '../components/card/Card2.jsx'
import { AuthContext } from "../context/authContext.jsx";

function HomePage() {
  const { username } = React.useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
          <p className="text-gray-600">Welcome to the home page!</p>
          <p>{username}</p>
        </div>

        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default HomePage;

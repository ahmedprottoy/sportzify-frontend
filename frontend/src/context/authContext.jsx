import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [imgId, setImgId] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedImgId = localStorage.getItem("imgId");

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedImgId) {
      setImgId(storedImgId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("imgId", imgId);
  }, [username, imgId]);

  const clearContext = () => {
    setUsername("");
    setImgId("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("imgId");
  };

  return (
    <AuthContext.Provider
      value={{ username, imgId, setUsername, setImgId, clearContext,setIsLoggedIn,isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

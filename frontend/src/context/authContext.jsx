import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedimageUrl = localStorage.getItem("imageUrl");

    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }

    if (storedimageUrl) {
      setImageUrl(storedimageUrl);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("imageUrl", imageUrl);
  }, [username, imageUrl]);

  const clearContext = () => {
    setUsername("");
    setImageUrl("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("imageUrl");
  };

  const checkLoggedIn = () => {
    return isLoggedIn;
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        imageUrl,
        setUsername,
        setImageUrl,
        clearContext,
        setIsLoggedIn,
        isLoggedIn,
        checkLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

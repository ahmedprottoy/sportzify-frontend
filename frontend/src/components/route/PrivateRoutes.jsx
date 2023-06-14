import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import NotLoggedIn from '../common/NotLoggedIn'

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <NotLoggedIn />;
};

export default PrivateRoutes;

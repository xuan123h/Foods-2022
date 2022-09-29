import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/custom-hook/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

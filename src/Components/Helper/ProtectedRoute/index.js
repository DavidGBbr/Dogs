import React, { useContext } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
};

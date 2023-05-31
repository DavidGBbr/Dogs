import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import * as C from "./styles";
import { NotFound } from "../NotFound";
import { useSelector } from "react-redux";
import { Loading } from "../Helper/Loading";

export const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to="/conta" />;
  return (
    <C.Login>
      <C.Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </C.Forms>
    </C.Login>
  );
};

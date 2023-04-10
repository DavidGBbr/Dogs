import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <C.Header>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </C.Header>
  );
};

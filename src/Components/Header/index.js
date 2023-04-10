import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

export const Header = () => {
  return (
    <C.Header>
      <C.Nav className="container">
        <C.Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </C.Logo>
        <C.Login to="/login">Login / Criar</C.Login>
      </C.Nav>
    </C.Header>
  );
};

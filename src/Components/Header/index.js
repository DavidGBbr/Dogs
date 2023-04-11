import React, { useContext } from "react";
import * as C from "./styles";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../Contexts/UserContext";

export const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <C.Header>
      <C.Nav className="container">
        <C.Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </C.Logo>
        {data ? (
          <C.Login to="/conta">{data.nome}</C.Login>
        ) : (
          <C.Login to="/login">Login / Criar</C.Login>
        )}
      </C.Nav>
    </C.Header>
  );
};

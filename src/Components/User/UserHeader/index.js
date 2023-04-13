import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { UserHeaderNav } from "../UserHeaderNav";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <C.Header>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </C.Header>
  );
};

import React, { useContext, useState } from "react";
import * as C from "./styles";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import { useMedia } from "../../../Hooks/useMedia";
import { useEffect } from "react";

export const UserHeaderNav = () => {
  const [mobilemenu, setMobilemenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();
  useEffect(() => {
    setMobilemenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <C.MobileBtn
          aria-label="Menu"
          onClick={() => setMobilemenu(!mobilemenu)}
          className={mobilemenu && "mobileBtnActive"}
        ></C.MobileBtn>
      )}
      <C.Nav className={mobilemenu && "navMobileActive"}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </C.Nav>
    </>
  );
};

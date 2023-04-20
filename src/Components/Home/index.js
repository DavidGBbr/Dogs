import React from "react";
import * as C from "./styles";
import { Feed } from "../Feed/index";
import { Head } from "../Helper/Head";

export const Home = () => {
  return (
    <C.Home className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </C.Home>
  );
};

import React from "react";
import * as C from "./styles";
import { Feed } from "../Feed/index";

export const Home = () => {
  return (
    <C.Home className="container mainContainer">
      <Feed />
    </C.Home>
  );
};

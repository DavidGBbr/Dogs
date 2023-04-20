import React from "react";
import * as C from "./styles";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <C.Footer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </C.Footer>
  );
};

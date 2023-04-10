import React from "react";
import * as C from "./styles";

export const Button = ({ children, ...props }) => {
  return <C.Button {...props}>{children}</C.Button>;
};

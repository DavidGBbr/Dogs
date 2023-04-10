import React from "react";
import * as C from "./styles";

export const Input = ({ label, type, name }) => {
  return (
    <C.Wrapper>
      <C.Label htmlFor={name}>{label}</C.Label>
      <C.Input id={name} name={name} type={type} />
      <C.Error>Error</C.Error>
    </C.Wrapper>
  );
};

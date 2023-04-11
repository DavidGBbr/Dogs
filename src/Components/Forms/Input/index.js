import React from "react";
import * as C from "./styles";

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <C.Wrapper>
      <C.Label htmlFor={name}>{label}</C.Label>
      <C.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <C.Error>{error}</C.Error>}
    </C.Wrapper>
  );
};

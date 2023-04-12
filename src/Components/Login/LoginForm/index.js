import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { UserContext } from "../../../Contexts/UserContext";
import { Error } from "../../Helper/Error";
import * as C from "./styles";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <C.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </C.Form>
      <C.Perdeu to="/login/perdeu">Perdeu a Senha?</C.Perdeu>
      <C.Cadastro>
        <C.Subtitle>Cadastre-se</C.Subtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </C.Cadastro>
      <C.ButtonCriar to="/login/criar">Cadastro</C.ButtonCriar>
    </section>
  );
};

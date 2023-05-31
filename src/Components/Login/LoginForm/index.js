import React from "react";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { Error } from "../../Helper/Error";
import * as C from "./styles";
import { Head } from "../../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/user";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description="Área de login." />
      <h1 className="title">Login</h1>
      <C.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </C.Form>
      <C.Perdeu to="/login/perdeu">Perdeu a Senha?</C.Perdeu>
      <C.Cadastro>
        <C.Subtitle>Cadastre-se</C.Subtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <C.ButtonCriar to="/login/criar">Cadastro</C.ButtonCriar>
      </C.Cadastro>
    </section>
  );
};

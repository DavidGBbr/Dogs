import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { useForm } from "../../../Hooks/useForm";
import { useFetch } from "../../../Hooks/useFetch";
import { Input } from "../../Forms/Input";
import { Button } from "../../Forms/Button";
import { Error } from "../../Helper/Error";
import { PHOTO_POST } from "../../../api";
import { useNavigate } from "react-router-dom";
import { Head } from "../../Helper/Head";

export const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <C.PhotoPost className="animeLeft">
      <Head title="Poste sua foto" description="Postar foto." />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <C.Preview
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></C.Preview>
        )}
      </div>
    </C.PhotoPost>
  );
};

import React from "react";
import * as C from "./styles";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../../api";

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <C.Delete disabled>Deletar</C.Delete>
      ) : (
        <C.Delete onClick={handleClick}>Deletar</C.Delete>
      )}
    </>
  );
};

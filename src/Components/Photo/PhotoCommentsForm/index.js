import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { useFetch } from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../api";
import { Error } from "../../Helper/Error";
import * as C from "./styles";

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.Textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <C.Button>
        <Enviar />
      </C.Button>
      <Error error={error} />
    </C.Form>
  );
};

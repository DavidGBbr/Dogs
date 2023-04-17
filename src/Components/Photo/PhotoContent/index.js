import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments";

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <C.Photo>
      <C.Img>
        <img src={photo.src} alt={photo.title} />
      </C.Img>
      <C.Details>
        <div>
          <C.Author>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <C.Visualizacoes>{photo.acessos}</C.Visualizacoes>
          </C.Author>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <C.Attributes>
            <li>{photo.peso} kg</li>
            {photo.idade === "1" ? (
              <li>{photo.idade} ano</li>
            ) : (
              <li>{photo.idade} anos</li>
            )}
          </C.Attributes>
        </div>
      </C.Details>
      <PhotoComments id={photo.id} comments={comments} />
    </C.Photo>
  );
};

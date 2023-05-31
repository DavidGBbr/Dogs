import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments";
import { PhotoDelete } from "../PhotoDelete";
import { Image } from "../../Helper/Image";
import { useSelector } from "react-redux";

export const PhotoContent = ({ single }) => {
  const { user } = useSelector((state) => state);
  const { photo, comments } = useSelector((state) => state.photo.data);

  return (
    <C.Photo className={single ? "single" : ""}>
      <C.Img>
        <Image src={photo.src} alt={photo.title} />
      </C.Img>
      <C.Details>
        <div>
          <C.Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
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
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </C.Photo>
  );
};

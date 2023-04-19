import React, { useContext } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments";
import { UserContext } from "../../../Contexts/UserContext";
import { PhotoDelete } from "../PhotoDelete";
import { Image } from "../../Helper/Image";

export const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

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

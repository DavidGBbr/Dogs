import React from "react";
import * as C from "./styles";
import { Image } from "../../Helper/Image/";

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <C.Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </C.Photo>
  );
};

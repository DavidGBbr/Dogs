import React from "react";
import * as C from "./styles";

export const FeedPhotosItem = ({ photo }) => {
  return (
    <C.Photo>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </C.Photo>
  );
};

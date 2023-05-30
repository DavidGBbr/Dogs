import React from "react";
import * as C from "./styles";
import { Image } from "../../Helper/Image/";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/ui";
import { fetchPhoto } from "../../../store/photo";

export const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <C.Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </C.Photo>
  );
};

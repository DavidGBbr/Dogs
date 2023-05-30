import React from "react";
import { FeedPhotosItem } from "../FeedPhotosItem";
import * as C from "./styles";
import { useSelector } from "react-redux";

export const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);

  return (
    <C.Feed className="animeLeft">
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </C.Feed>
  );
};

import React from "react";
import * as C from "./styles";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { useState } from "react";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

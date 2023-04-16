import React from "react";
import * as C from "./styles";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";

export const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

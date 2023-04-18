import React, { useState } from "react";
import * as C from "./styles";

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <C.Wrapper>
      {skeleton && <C.Skeleton></C.Skeleton>}
      <C.Img onLoad={handleLoad} alt={alt} {...props} />
    </C.Wrapper>
  );
};

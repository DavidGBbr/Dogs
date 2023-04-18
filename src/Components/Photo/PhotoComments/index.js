import React, { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import { PhotoCommentsForm } from "../PhotoCommentsForm";
import * as C from "./styles";
import { useRef } from "react";
import { useEffect } from "react";

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <C.Comments ref={commentsSection}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </C.Comments>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

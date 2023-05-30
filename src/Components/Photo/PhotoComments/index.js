import React, { useState } from "react";
import { PhotoCommentsForm } from "../PhotoCommentsForm";
import * as C from "./styles";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { data } = useSelector((state) => state.user);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <C.Comments
        ref={commentsSection}
        className={props.single ? "single" : ""}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </C.Comments>
      {data && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

import React from "react";
import * as C from "./styles";
import { useEffect } from "react";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../../store/photo";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, error, data } = useSelector((state) => state.photo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <C.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </C.Modal>
  );
};

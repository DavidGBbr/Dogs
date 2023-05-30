import React from "react";
import * as C from "./styles";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/ui";
import { useEffect } from "react";

export const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { loading, error, data } = useSelector((state) => state.photo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }
  if (!modal) return null;
  return (
    <C.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </C.Modal>
  );
};

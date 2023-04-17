import React from "react";
import * as C from "./styles";
import { useFetch } from "../../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTO_GET } from "../../../api";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, []);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <C.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </C.Modal>
  );
};

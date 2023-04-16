import React, { useEffect } from "react";
import { FeedPhotosItem } from "../FeedPhotosItem";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import * as C from "./styles";

export const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <C.Feed className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </C.Feed>
    );
  return null;
};

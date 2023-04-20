import React, { useContext } from "react";
import { UserHeader } from "./UserHeader";
import { Feed } from "../Feed";
import { Route, Routes } from "react-router-dom";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";
import { UserContext } from "../../Contexts/UserContext";
import { NotFound } from "../NotFound";
import { Head } from "../Helper/Head";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" description="Conta do usuário." />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

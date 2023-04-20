import React, { useEffect } from "react";
import { Head } from "../../Helper/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../api";
import { Loading } from "../../Helper/Loading";
import { Error } from "../../Helper/Error";
import { UserStatsGraphs } from "../UserStatsGraphs";

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" description="Estatísticas do usuário." />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

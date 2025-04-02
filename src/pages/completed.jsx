import React from "react";
import ShowAll from "../components/Show-all";
import { useAllCompletedAnime } from "../services/use-get-completed";
import Loading from "../components/Loading";

const Completed = () => {
  const {
    data: completed,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useAllCompletedAnime();

  const animeList =
    completed?.pages.flatMap((page) => page.data.animeList) ?? [];

  if (loading) return <Loading />;

  return (
    <div>
      <ShowAll
        title={"Anime Tamat"}
        animeList={animeList}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
      />
    </div>
  );
};

export default Completed;

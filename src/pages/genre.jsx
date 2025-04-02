import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetGenreById } from "../services/use-get-genre";
import ShowAll from "../components/Show-all";

const Genre = () => {
  const { genreId } = useParams();
  const {
    data: animeByGenre,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useGetGenreById(genreId);

  const animeList =
    animeByGenre?.pages.flatMap((page) => page.data.animeList) ?? [];

  if (loading) return <Loading />;
  return (
    <div>
      <ShowAll
        title={genreId}
        animeList={animeList}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
      />
    </div>
  );
};

export default Genre;

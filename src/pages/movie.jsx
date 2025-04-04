import Loading from "../components/Loading";
import { useGetRecentAnime } from "../services/use-get-recent";
import ShowAll from "../components/Show-all";

const Movie = () => {
  const { data: movie, isLoading: loading } = useGetRecentAnime();

  const animeList = movie?.data?.movie?.animeList;

  if (loading) return <Loading />;

  return (
    <div className="overflow-hidden">
      <ShowAll title={"Anime Movie"} animeList={animeList} />
    </div>
  );
};

export default Movie;

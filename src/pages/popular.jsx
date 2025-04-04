import Loading from "../components/Loading";
import { useGetPopuler } from "../services/use-get-populer";
import ShowAll from "../components/Show-all";

const Popular = () => {
  const {
    data: animePopular,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useGetPopuler();

  const animeList =
    animePopular?.pages.flatMap((page) => page.data.animeList) ?? [];


  if (loading) return <Loading />;

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ShowAll
      title={"Anime Terpopuler"}
        animeList={animeList}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
      />
    </div>
  );
};

export default Popular;

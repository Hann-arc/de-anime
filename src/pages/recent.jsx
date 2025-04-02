import Loading from "../components/Loading";
import { useGetAllRecentAnime } from "../services/use-get-recent";
import LoadingPage from "../assets/Loadingpage.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigation } from "../util/navigate";

const Recent = () => {
  const {
    data: animeRecent,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useGetAllRecentAnime();
  const { navigateToDetail } = useNavigation();

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const animeList =
    animeRecent?.pages.flatMap((page) => page.data.animeList) ?? [];

  return (
    <div className="flex flex-col px-4 py-6">
      <h2 className="text-2xl md:ml-5 ml-2 pt-5 pb-6 pl-0 md:text-3xl font-bold hover:text-orange-500 w-fit">
        Episode Terbaru
      </h2>
      <InfiniteScroll
        dataLength={animeList.length}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={
          <div className="w-full flex justify-center items-center py-2">
            <Player
              autoplay
              loop
              src={LoadingPage}
              className="w-4xl h-20 sm:w-4xl sm:h-24 md:w-4xl md:h-28 scale-150"
            />
          </div>
        }
        style={{ overflow: "visible" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-1 md:px-3.5 gap-4">
          {animeList.map((anime) => (
            <div
              key={anime?.animeId}
              onClick={() => navigateToDetail(anime?.animeId)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-2 flex gap-2 items-start cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={anime.poster}
                alt={anime.title}
                className="w-38 sm:w-56 md:w-48 h-26 sm:h-36 md:h-32 object-cover rounded-md flex-shrink-0"
              />

              <div className="pl-2 flex-grow min-w-0 sm:flex sm:flex-col sm:justify-center">
                <p className="text-orange-400 text-lg mb-1 sm:text-xl">
                  Ep {anime.episodes}
                </p>
                <p className="text-white text-sm font-semibold sm:text-sm line-clamp-2 min-w-0">
                  {anime.title}
                </p>
                <p className="text-gray-600 text-sm font-semibold sm:text-sm line-clamp-2 min-w-0">
                  {anime.releasedOn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Recent;

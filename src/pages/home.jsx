import React from "react";
import AnimeCarousel from "../components/Carousel";
import HeroCarousel from "../components/HeroCarousel";
import { useGetTopPopulerCarousel } from "../services/use-get-populer";
import { useGetRecentAnime } from "../services/use-get-recent";
import { useCompletedAnime } from "../services/use-get-completed";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../components/Loading";
import LoadingPage from "../assets/Loadingpage.json";
import { useNavigation } from "../util/navigate/index";



const Home = () => {
  const { data: topPopuler, isLoading: loading } = useGetTopPopulerCarousel();
  const { data: home } = useGetRecentAnime();
  const {
    navigateToDetail,
    navigateToPopuler,
    navigateToCompleted,
    navigateToMovie,
    navigateToRecent,
  } = useNavigation();

  const { data: completed } = useCompletedAnime();
  const slidesData =
    topPopuler?.data?.animeList?.slice(0, 3).map((anime) => ({
      id: anime.animeId,
      bgImage: anime.poster,
      charactersImage: anime.poster,
      title: anime.title,
      buttonText: "Mulai Menonton",
    })) || [];

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <HeroCarousel slides={slidesData} />

      {/*  Anime Terpopuler */}
      <div className="flex flex-col px-4">
        <div className="flex justify-between pt-10  pb-3">
          <h2 className="text-2xl md:ml-5 ml-2  md:text-3xl font-bold hover:text-orange-500 w-fit">
            Anime Terpopuler
          </h2>
          <button
            onClick={() => navigateToPopuler()}
            className="px-5 py-1 rounded-2xl md:mr-3 bg-orange-500 hover:bg-transparent border-2 border-amber-600 cursor-pointer "
          >
            More
          </button>
        </div>
        {topPopuler?.data?.animeList?.length > 0 ? (
          <AnimeCarousel
            desk={"Sub Indo"}
            animeList={topPopuler?.data?.animeList?.slice(3, 13)}
          />
        ) : (
          <div className="w-full flex justify-center items-center py-2">
            <Player
              autoplay
              loop
              src={LoadingPage}
              className="w-4xl h-20 sm:w-4xl sm:h-24 md:w-4xl md:h-28 scale-150"
            />
          </div>
        )}
      </div>

      {/* tamat */}
      <div className="flex flex-col px-4">
        <div className="flex justify-between pb-3">
          <h2 className="text-2xl md:ml-5 ml-2  md:text-3xl font-bold hover:text-orange-500 w-fit">
            Anime Tamat
          </h2>
          <button
            onClick={() => navigateToCompleted()}
            className="px-5 py-1 rounded-2xl md:mr-3 bg-orange-500 hover:bg-transparent border-2 border-amber-600 cursor-pointer "
          >
            More
          </button>
        </div>
        {completed?.data?.animeList.length > 0 ? (
          <AnimeCarousel
            desk={"Sub Indo"}
            animeList={completed?.data?.animeList?.slice(0, 10)}
          />
        ) : (
          <div className="w-full flex justify-center items-center py-2">
            <Player
              autoplay
              loop
              src={LoadingPage}
              className="w-4xl h-20 sm:w-4xl sm:h-24 md:w-4xl md:h-28 scale-150"
            />
          </div>
        )}
      </div>

      {/* Anime Movie */}
      <div className="flex flex-col px-4">
        <div className="flex justify-between pb-3">
          <h2 className="text-2xl md:ml-5 ml-2  md:text-3xl font-bold hover:text-orange-500 w-fit">
            Anime Movie
          </h2>
          <button
            onClick={() => navigateToMovie()}
            className="px-5 py-1 rounded-2xl md:mr-3 bg-orange-500 hover:bg-transparent border-2 border-amber-600 cursor-pointer "
          >
            More
          </button>
        </div>
        {home?.data?.movie?.animeList?.length > 0 ? (
          <AnimeCarousel
            desk={"Sub Indo"}
            animeList={home?.data?.movie?.animeList}
          />
        ) : (
          <div className="w-full flex justify-center items-center py-2">
            <Player
              autoplay
              loop
              src={LoadingPage}
              className="w-4xl h-20 sm:w-4xl sm:h-24 md:w-4xl md:h-28 scale-150"
            />
          </div>
        )}
      </div>

      {/*   Anime Terbaru */}

      <div className="flex flex-col gap-6 px-4 py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:ml-5 ml-2 md:text-3xl font-bold hover:text-orange-500 w-fit">
            Episode Terbaru
          </h2>
          <button
            onClick={() => navigateToRecent()}
            className="px-5 py-1 rounded-2xl bg-orange-500 hover:bg-transparent border-2 md:mr-3 border-amber-600 cursor-pointer "
          >
            More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-1 md:px-3.5 gap-4">
          {home?.data?.recent?.animeList.slice(0, 6).map((anime) => (
            <div
              key={anime.animeId}
              onClick={() => navigateToDetail(anime.animeId)}
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
      </div>
    </div>
  );
};

export default Home;

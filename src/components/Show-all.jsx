import LoadingPage from "../assets/Loadingpage.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { Player } from "@lottiefiles/react-lottie-player";
import {useNavigation} from '../util/navigate/index'

const ShowAll = ({ animeList, next, hasMore, title }) => {

 const { navigateToDetail } = useNavigation()

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl md:ml-5 ml-2 pt-10 pl-2 md:pl-0 md:text-3xl font-bold hover:text-orange-500 w-fit">
       {title}
      </h2>
      <InfiniteScroll
        dataLength={animeList.length}
        next={next} 
        hasMore={hasMore} 
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
        <div className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {animeList.map((anime) => (
            <div
              key={anime.animeId}
              onClick={() => navigateToDetail(anime.animeId)}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={anime.poster}
                alt={anime.title}
                className="w-full h-65 md:min-h-96 object-cover rounded-lg shadow-md"
              />
              <h3 className="mt-2 text-white text-sm md:text-base font-semibold line-clamp-2 text-center md:text-left">
                {anime.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                Sub Indo
              </p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ShowAll;
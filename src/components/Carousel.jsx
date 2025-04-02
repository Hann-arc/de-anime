import {useNavigation} from '../util/navigate/index'
const AnimeCarousel = ({ animeList, desk }) => {
  
 const { navigateToDetail } = useNavigation()

 
  return (
    <div className="w-full max-w-screen pr-5 pl-1 py-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar md:pl-1">
      <div className="inline-flex space-x-4 cursor-pointer">
        {animeList.map((anime) => (
          <div
            key={anime.animeId}
            onClick={() => navigateToDetail(anime?.animeId)}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 snap-start pl-1 md:pl-3.5 hover:scale-105 transition-transform"
          >
            <img
              src={anime.poster}
              alt={anime.title}
              className="w-full h-56 md:min-h-96 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-white text-sm md:text-base font-semibold line-clamp-2 text-center md:text-left">
              {anime.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              {desk || anime.estimation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCarousel;

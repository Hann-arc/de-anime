import { IoIosSearch } from "react-icons/io";
import { useGetAllGenre } from "../services/use-get-genre";
import { useSearchAnime } from "../services/use-search-anime";
import * as React from "react";
import ShowAll from "../components/Show-all";
import { useDebounce } from "@uidotdev/usehooks";
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingPage from "../assets/Loadingpage.json";
import {useNavigation} from '../util/navigate/index'

const Search = () => {
  const [query, setQuery] = React.useState("");
  const { data: genres } = useGetAllGenre();
  const debouncedQuery = useDebounce(query, 500);
  const { data: search, isLoading } = useSearchAnime(debouncedQuery);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const {navigateToGenreById} = useNavigation()
  
  return (
    <div className="w-full min-h-screen relative flex flex-col overflow-hidden">
      <div className="flex relative mx-5 md:mx-80 mt-14">
        <input
          value={query}
          onChange={handleSearch}
          type="text"
          className="md:text-lg text-sm focus:border-orange-500 border-gray-600 border-2 rounded-2xl w-full h-10 text-white outline-none pl-3 pr-10"
          placeholder="Cari Anime"
        />
        <IoIosSearch
          size={24}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>

      {isLoading && (
        <div className="w-full flex justify-center items-center py-2">
          <Player
            autoplay
            loop
            src={LoadingPage}
            className="w-4xl h-20 sm:w-4xl sm:h-24 md:w-4xl md:h-28 scale-150"
          />
        </div>
      )}


      {!isLoading && search?.data?.animeList?.length > 0 ? (
        <ShowAll
          title={`Hasil Pencarian  ${debouncedQuery}`}
          animeList={search?.data?.animeList}
        />
      ) : (
        !isLoading &&
        debouncedQuery && (
          <p className="text-center mt-5 text-gray-400">
            Anime tidak ditemukan
          </p>
        )
      )}

      {!debouncedQuery && genres?.data?.genreList?.length > 0 && (
        <div className="mx-6 md:mx-80 mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
            {genres?.data?.genreList?.map((genre) => (
              <button
                key={genre.genreId}
                onClick={() => navigateToGenreById(genre.genreId)}
                className="cursor-pointer hover:bg-orange-500 transition
                hover:text-black hover:border-orange-500 border-gray-600 border-2 px-5 py-1 rounded-2xl whitespace-nowrap"
              >
                {genre.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

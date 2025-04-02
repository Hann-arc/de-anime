import {useNavigation} from '../util/navigate/index'

export const AnimeDetails = ({ AnimeDetails }) => {
    const {navigateToGenreById} = useNavigation()

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
        <div>
          <p>
            <span className="font-semibold">Status</span> :{" "}
            {AnimeDetails?.status}
          </p>
          <p>
            <span className="font-semibold">Type</span> : {AnimeDetails?.type}
          </p>
          <p>
            <span className="font-semibold">Score</span> :{" "}
            {AnimeDetails?.score?.value} / {AnimeDetails?.score?.users}
          </p>
          <p>
            <span className="font-semibold">Producers</span> :{" "}
            {AnimeDetails?.producers}
          </p>
          <p>
            <span className="font-semibold">Genres</span> :
            {AnimeDetails?.genreList?.map((genre, index) => (
              <span key={genre?.genreId} onClick={() => navigateToGenreById(genre?.genreId)} className="text-orange-400 cursor-pointer">
                {index > 0 && ", "} {genre?.title}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p>
            <span className="font-semibold">Source</span> :{" "}
            {AnimeDetails?.source}
          </p>
          <p>
            <span className="font-semibold">Duration</span> :{" "}
            {AnimeDetails?.duration}
          </p>
          <p>
            <span className="font-semibold">Studios</span> :{" "}
            {AnimeDetails?.studios}
          </p>
          <p>
            <span className="font-semibold">Season</span> :{" "}
            {AnimeDetails?.season}
          </p>
          <p>
            <span className="font-semibold">Aired</span> : {AnimeDetails?.aired}
          </p>
        </div>
      </div>
    </div>
  );
};

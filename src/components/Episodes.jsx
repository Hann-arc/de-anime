import { useNavigation } from "../util/navigate/index";

export const EpisodeList = ({ episodes, selectedEpisode }) => {
    const {navigateToStreamById} = useNavigation()
  return (
    <div className="py-4 bg-gray-900 rounded-lg w-full max-h-96 overflow-y-auto">
      <div className="space-y-3">
        {episodes.map((episode) => (
          <button
          key={episode.episodeId}
          className={`flex  cursor-pointer items-center px-4 py-2 rounded-md transition hover:bg-gray-800 ${
            selectedEpisode === episode.episodeId ? "bg-gray-700" : ""
          } text-white w-full`}
          onClick={() => navigateToStreamById(episode.episodeId)}
        >
          <span
            className="font-bold mr-3 px-3 py-1 bg-orange-600 text-white rounded-md"
          >
            {episode.title}
          </span>
          
          <span>Episode {episode.title}</span>
        </button>
        ))}
      </div>
    </div>
  );
};

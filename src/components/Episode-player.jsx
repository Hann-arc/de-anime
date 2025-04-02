import * as React from "react";
import { useGetServerById } from "../services/use-get-stream";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import ShowAll from "./Show-all";

const EpisodePlayer = ({ episodeData }) => {
  const [selectedServerId, setSelectedServerId] = React.useState(null);
  const { data: serverData } = useGetServerById(selectedServerId);

 
  const availableServers = episodeData?.server?.qualities
    .flatMap((quality) =>
      quality.serverList.map((server) => ({
        id: server.serverId,
        title: server.title,
      }))
    )
    .filter(Boolean);
  const videoSrc = serverData?.data?.url || episodeData.defaultStreamingUrl;

  return (
    <div className="bg-gray-900 pt-4 mt-5 rounded-lg text-white">
    <h2 className="  mx-5 font-bold text-lg text-center sm:text-left">{episodeData.title}</h2>

    <div className="mt-4  mx-5 ">
      {videoSrc.toLowerCase() === "no iframe found" ? (
        <h5 className="text-lg font-extrabold text-center">Server Tidak Tersedia</h5>
      ) : videoSrc.endsWith(".mp4") ? (
        <video
          id="video-player-video"
          className="w-full h-[250px] sm:h-[400px] md:h-[500px]"
          controls
          src={videoSrc}
        />
      ) : (
        <iframe
          id="video-player-iframe"
          src={videoSrc}
          width="100%"
          height="250"
          className="sm:h-[400px] md:h-[500px]"
          allowFullScreen
        ></iframe>
      )}
    </div>

    <div className="mt-4 flex flex-col mx-5">
      <label className="block text-sm mb-5 font-semibold">Pilih Server:</label>
      <select
        className="bg-gray-800 p-2 rounded w-full text-sm sm:text-base"
        value={selectedServerId || ""}
        onChange={(e) => setSelectedServerId(e.target.value)}
      >
        <option value="" disabled>
          Server Bawaan
        </option>
        {availableServers.map((server) => (
          <option className="text-xs" key={server.id} value={server.id}>
            {server.title}
          </option>
        ))}
      </select>
    </div>

    <div className="mt-4 mx-5 flex gap-2 py-2">
        {episodeData.hasPrevEpisode && (
          <a
            href={`/stream/${episodeData?.prevEpisode?.episodeId}`}
            className="items-center justify-center flex flex-1 text-center border border-orange-400  py-2 rounded transition hover:bg-orange-400 hover:text-black"
          >
            <GrFormPrevious size={"25px"}/>
          </a>
        )}

        <a
          href={`/detail/${episodeData?.animeId}`}
          className="items-center justify-center flex flex-1 text-center border border-orange-400  py-2 rounded transition hover:bg-orange-400 hover:text-black"
        >
          <RxHamburgerMenu  size={"20px"}/>
        </a>

        {episodeData.hasNextEpisode && (
          <a
            href={`/stream/${episodeData?.nextEpisode?.episodeId}`}
            className="items-center justify-center flex flex-1 text-center border border-orange-400  py-2 rounded transition hover:bg-orange-400 hover:text-black"
          >
            <MdNavigateNext size={"25px"}/>
          </a>
        )}
      </div>

      <div className="flex md:mt-5">
      <ShowAll title={"Anime Movie"} animeList={episodeData?.movie?.animeList} />
      </div>
  </div>
  );
};

export default EpisodePlayer;

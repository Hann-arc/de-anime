import React from "react";
import { useGetStramByEpisode } from "../services/use-get-stream";
import EpisodePlayer from "../components/Episode-player";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Stream = () => {
  const { episodeId } = useParams();
  const { data: anime, isLoading } = useGetStramByEpisode(episodeId);

  if (isLoading) return <Loading />
 
  return (
    <div className="w-full min-h-screen">
      <EpisodePlayer episodeData={anime?.data} />
    </div>
  );
};

export default Stream;

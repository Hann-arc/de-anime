import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetDetailAnime } from "../services/use-get-detail-anime";
import { useGetAllAnime } from "../services/use-get-anime";
import Loading from "../components/Loading";
import { FaPlay } from "react-icons/fa6";
import { Synopsis } from "../components/Synopsis";
import { EpisodeList } from "../components/Episodes";
import { AnimeDetails } from "../components/Anime-detail";
import { useNavigation } from "../util/navigate/index";


const Detail = () => {
   const navigate = useNavigate();
  const { animeId } = useParams();
  const { data: detail, isLoading } = useGetDetailAnime(animeId);
  const { data: anime } = useGetAllAnime();
  const {navigateToStreamById} = useNavigation()

  const firstId = detail?.data?.episodeList?.[detail?.data?.episodeList?.length - 1].episodeId
  if (isLoading) {
    return <Loading />;
  }

  if (!detail?.data) {
    navigate("/notfound", { replace: true });
    return null;
  }
  const title =
    detail?.data?.title && detail?.data?.title !== ""
      ? detail?.data?.title
      : anime?.data?.list
          ?.flatMap((section) => section.animeList)
          ?.find((a) => a.animeId === animeId)?.title ||
        "Judul Tidak Ditemukan";

  return (
    <div className="relative w-full flex flex-col mx-auto overflow-hidden">
      <div
        className="relative w-full h-48 md:h-[300px] bg-cover bg-center md:bg-top"
        style={{
          backgroundImage: `url(${detail?.data?.poster})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black via-transparent to-black opacity-75 backdrop-blur-md"></div>
      </div>

      <div className="relative flex flex-col md:flex-row gap-6 p-6 mt-[-150px] md:mt-[-90px] ">
        <img
          src={detail?.data?.poster}
          className="w-48 h-64 md:w-50 md:h-80 object-cover rounded-lg shadow-md  md:mx-14
        relative md:absolute left-1/2 -translate-x-1/2 md:left-20 md:top-1/2 md:-translate-y-1/2"
        />
        <div className="flex flex-col text-center md:text-left md:ml-64">
          <h2 className="text-2xl font-bold ">
            {title || detail?.data?.synonyms}
          </h2>
          <p className="text-white  text-sm">
            ⭐{detail?.data?.score?.value} / {detail?.data?.score?.users} users
            |<span className="text-orange-400"> {detail?.data?.status}</span>
          </p>
          <button onClick={() => navigateToStreamById(firstId)} className="cursor-pointer md:w-fit mt-4 flex justify-center md:justify-start items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
            <FaPlay /> Tonton
          </button>
        </div>
      </div>
      <div className="flex">
        <Synopsis paragraphs={detail?.data?.synopsis?.paragraphs || []} />
      </div>
      <div className="relative flex flex-col mx-8 overflow-hidden md:mt-24 mt-10">
        <h1 className="text-white border-b-2 border-gray-600 pb-5 text-2xl font-bold mb-8">Daftar Episode</h1>
        <EpisodeList
          episodes={detail?.data?.episodeList}
        />
      </div>
      <div className="relative flex flex-col mx-8 md:mt-15 mt-10">
        <h1  className="text-white border-b-2 border-gray-600 pb-5 text-2xl font-bold mb-8">Detail Anime</h1>
        <div>
          <AnimeDetails AnimeDetails={detail?.data}/>
        </div>
      </div>
    </div>
  );
};

export default Detail;

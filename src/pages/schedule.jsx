import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import LoadingPage from "../assets/Loadingpage.json";
import AnimeCarousel from "../components/Carousel";
import { useGetScadule } from "../services/use-get-scedule";

const Schedule = () => {
  const { data: schadule } = useGetScadule();

  return (
    <div className="flex min-h-screen flex-col mt-10 gap-1">
      <div className="flex flex-col px-4">
        {schadule?.data?.days?.length > 0 ? (
          schadule.data.days.map((dayItem, index) => (
            <div key={index} className="pb-3">
              <h2 className="text-2xl md:ml-5 ml-2 md:text-3xl font-bold hover:text-orange-500 w-fit">
                {dayItem.day}
              </h2>

              {dayItem.animeList.length > 0 ? (
                <AnimeCarousel animeList={dayItem.animeList} />
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
          ))
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
    </div>
  );
};

export default Schedule;

import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import loadingAnimation from "../assets/Loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen  bg-black">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
      />
    </div>
  );
};


export default Loading;

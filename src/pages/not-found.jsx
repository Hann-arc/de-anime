import { Player } from "@lottiefiles/react-lottie-player";
import notFound from "../assets/NotFound.json";
import { useNavigation } from "../util/navigate";


const NotFound = () => {
  const {navigateToHome} = useNavigation()
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <Player
          autoplay
          loop
          src={notFound}
          className="w-60 h-60 sm:w-32 sm:h-64 md:w-64 md:h-64"
        />
        <h3 className="text-color-asscent text-4xl font-bold">NOT FOUND</h3>
        <button onClick={() => navigateToHome()} className="px-5 py-1 rounded-2xl bg-orange-500 hover:bg-transparent border-2 md:mr-3 border-amber-600 cursor-pointer ">
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

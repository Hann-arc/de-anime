import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layout/app-layout";
import Home from "../pages/home";
import Popular from "../pages/popular";
import Schedule from "../pages/schedule";
import Detail from "../pages/detail";
import NotFound from "../pages/not-found";
import Completed from "../pages/completed";
import Movie from "../pages/movie";
import Recent from "../pages/recent";
import Genre from "../pages/genre";
import Search from "../pages/search";
import Stream from "../pages/stream";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/populer",
        element: <Popular />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/detail/:animeId",
        element: <Detail />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/genre/:genreId",
        element: <Genre />,
      },
      {
        path: "/stream/:episodeId",
        element: <Stream />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;

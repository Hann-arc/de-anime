import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    navigateToHome: () => navigate("/"),
    navigateToGenreById: (genreId) => navigate(`/genre/${genreId}`),
    navigateToDetail: (animeId) => navigate(`/detail/${animeId}`),
    navigateToStreamById: (episodeId) => navigate(`/stream/${episodeId}`),
    navigateToPopuler: () => navigate("/populer"),
    navigateToMovie: () => navigate("/movie"),
    navigateToRecent: () => navigate("/recent"),
    navigateToCompleted: () => navigate("/completed"),
  };
};

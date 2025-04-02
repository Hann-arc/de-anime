import { useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetDetailAnime(animeId) {
  return useQuery({
    queryKey: ["detail", animeId],
    queryFn: async () => {
      return (await Api.get(`/anime/${animeId}`)).data;
    },
  });
}

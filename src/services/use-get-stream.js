import { useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetStramByEpisode(episodeId) {
  return useQuery({
    queryKey: ["stream", episodeId],
    queryFn: async () => {
      return (await Api.get(`/episode/${episodeId}`)).data;
    },
    
  });
}

export function useGetServerById(serverId) {
    return useQuery({
        queryKey: ["server", serverId],
        queryFn: async () => {
         return (await Api.get(`/server/${serverId}`)).data
        },
        enabled: !!serverId,
    })
}

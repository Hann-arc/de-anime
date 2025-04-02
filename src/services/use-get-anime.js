import { useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetAllAnime () {
    return useQuery({
        queryKey: ["all-anime"],
        queryFn: async () => {
            return (await Api.get('/anime')).data
        }
    })
}
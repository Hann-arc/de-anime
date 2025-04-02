import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetRecentAnime(){
    return useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            return (await Api.get('/home')).data
        }
    })
}

export function useGetAllRecentAnime() {
    return useInfiniteQuery({
        queryKey: ['recent'],
        queryFn: async ({pageParam = 1}) => {
            return (await Api.get(`/recent?page=${pageParam}`)).data
        },
        getNextPageParam: (lastPage) => {
            if(lastPage.pagination.hasNextPage){
                return lastPage.pagination.nextPage;
            } else {
                return undefined
            }
        }
    })
}
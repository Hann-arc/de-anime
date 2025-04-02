import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetAllGenre() {
    return useQuery({
        queryKey: ['genres'],
        queryFn: async () => {
            return (await Api.get('/genres')).data
        }
    })
}

export function useGetGenreById (genreId) {
    return useInfiniteQuery({
        queryKey: ['genre-id', genreId],
        queryFn: async ({pageParam = 1}) => {
            return (await Api.get(`/genres/${genreId}?page=${pageParam}`)).data
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
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetTopPopulerCarousel() {
  return useQuery({
    queryKey: ["populer"],
    queryFn: async () => {
      return (await Api.get("/popular")).data;
    },
  });
}

export function useGetPopuler() {
  return useInfiniteQuery({
    queryKey: ["popularAnime"],
    queryFn: async ({ pageParam = 1 }) => {
      return (await Api.get(`/popular?page=${pageParam}`)).data;
    },
    getNextPageParam: (lastPage) => {
        if (lastPage.pagination.hasNextPage) {
          return lastPage.pagination.nextPage;
        } else {
          return undefined;
        }
      },
  });
}

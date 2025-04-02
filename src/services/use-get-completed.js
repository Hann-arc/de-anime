import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useCompletedAnime() {
  return useQuery({
    queryKey: ["completed"],
    queryFn: async () => {
      return (await Api.get("/completed")).data;
    },
  });
}

export function useAllCompletedAnime() {
  return useInfiniteQuery({
    queryKey: ["all-completed"],
    queryFn: async ({ pageParam = 1 }) => {
      return (await Api.get(`/completed?page=${pageParam}`)).data;
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
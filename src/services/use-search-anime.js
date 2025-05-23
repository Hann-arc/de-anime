import { useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";
import toast from "react-hot-toast";

export function useSearchAnime(query) {
    return useQuery({
        queryKey: ["search", query],
        queryFn: async () => {
            if (!query) return [];
            
            const encodedQuery = encodeURIComponent(query.trim());
            const response = await Api.get("/search", { params: { q: encodedQuery } });
            return response.data;
        },
        enabled: !!query,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        onError: (error) => {
            toast.error("Error fetching search results:", error);
        },
    });
}


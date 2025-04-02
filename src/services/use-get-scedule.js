import { useQuery } from "@tanstack/react-query";
import { Api } from "../libs/api";

export function useGetScadule() {
  return useQuery({
    queryKey: ["scadule"],
    queryFn: async () => {
      return (await Api.get("/schedule")).data;
    },
  });
}

import { EpisodeResult } from "@/types";
import { api } from "./api";

export const getEpisodes = async (page: number, espisode?: string) => {
  const response = await api.get<EpisodeResult>(
    `/episode/?page=${page}` + (espisode ? `/&episode=${espisode}` : ""),
  );
  return response.data;
};

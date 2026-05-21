import { LocationResult } from "@/types";
import { api } from "./api";

export const getLocations = async (page: number, location?: string) => {
  const response = await api.get<LocationResult>(
    `/location/?page=${page}` + (location ? `/&name=${location}` : "") + ``,
  );
  return response.data;
};

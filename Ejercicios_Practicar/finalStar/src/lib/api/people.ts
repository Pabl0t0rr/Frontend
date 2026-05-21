import { People } from "@/types";
import { api } from "./api";

export const getPeople = async () => {
  const response = await api.get<People[]>("/people");
  return response.data;
};

export const getPeopleById = async (id: string) => {
  const response = await api.get<People>("/people/" + id);
  return response.data;
};

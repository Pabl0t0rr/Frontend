import { CharacterT, completeCharacterT, resultCharacterT } from "@/types";
import { api } from "./api";

export const getCharacters = async (page: number) => {
  const response = await api.get<resultCharacterT>(
    "/people?page=" + page + "&limit=10",
  );
  return response.data;
};

export const getCharacterById = async (id: string) => {
  const response = await api.get<completeCharacterT>("/people/" + id);
  return response.data;
};

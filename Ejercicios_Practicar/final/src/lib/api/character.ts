import { CharacterResult, CharacterT } from "@/types";
import { api } from "./api";

export const getCharacters = async (page: number) => {
  const response = await api.get<CharacterResult>("/character?page=" + page);
  return response.data;
};

export const getCharacterbyId = async (id: number) => {
  const response = await api.get<CharacterT>("/character/" + id);
  return response.data;
};

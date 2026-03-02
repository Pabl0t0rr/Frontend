import { api } from "./axios";
import { CharacterT } from "@/types";

export const getCharcaterById = async (id : number ) => {
    const response = await api.get<CharacterT>("/character/" + id);
    return response.data;
} 

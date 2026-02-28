import { apiName, apiId } from "./api";
import { Drink } from "@/types";

export const getCocktailById = async (id : number) => {
    const response = await apiId.get<Drink>("lookup.php?i="+id);
    return response.data;
}

export const getCocktailsByName = async (name : string) => {
    const response = await apiName.get<Drink>("search.php?s="+name)
    return response.data;
}
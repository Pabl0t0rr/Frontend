import { Character } from "./character";

export type CharacterResult = {
  info: InfoT;
  results: Character[];
};

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
};

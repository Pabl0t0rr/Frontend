import { CharacterT } from "./character";
import { LocationT } from "./location";

export type CharacterResult = {
  info: InfoT;
  results: CharacterT[];
};

export type LocationResult = {
  info: InfoT;
  results: LocationT[];
};

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
};

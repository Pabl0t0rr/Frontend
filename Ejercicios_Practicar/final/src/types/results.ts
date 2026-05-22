import { CharacterT } from "./character";
import { LocationT } from "./location";
import { EpisodeT } from "./episode";

export type CharacterResult = {
  info: InfoT;
  results: CharacterT[];
};

export type LocationResult = {
  info: InfoT;
  results: LocationT[];
};

export type EpisodeResult = {
  info: InfoT;
  results: EpisodeT[];
};

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
};

import { InfoT } from "./pagination";

export type ResultEpisodesT = {
  info: InfoT;
  results: Result[];
};

export type Result = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
};

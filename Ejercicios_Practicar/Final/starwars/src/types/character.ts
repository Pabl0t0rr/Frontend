export type CharacterRes = {
  uid: string;
  name: string;
  url: string;
};

export type completeCharacterT = {
  message: string;
  result: Result;
};

export type Result = {
  properties: CharacterT;
};

export type CharacterT = {
  created: Date;
  edited: Date;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  vehicles: string[];
  starships: string[];
  films: string[];
  url: string;
};

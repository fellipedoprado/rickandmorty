import { RAMCharacter } from "../../reducers/ramState.state";

export interface RAMCharacterAPIData {
  info:    Info;
  results: RAMCharacter[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

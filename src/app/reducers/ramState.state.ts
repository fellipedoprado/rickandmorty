export interface RAMState {
  favCharacterCounter: number;
  favCharacterList: RAMCharacter[];
  searchCharacterList: RAMCharacter[];
}

export interface RAMCharacter {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export interface Location {
  name: string;
  url:  string;
}

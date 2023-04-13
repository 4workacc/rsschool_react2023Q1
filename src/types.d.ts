type TRickAndMortyOrigin = {
    name: string;
    url: string;
  }

export type TRickAndMortyCharacter = {
    id: number;
    name:	string;
    status: 'Alive'|'Dead'|'unknown';
    species: string;
    type:	string;
    gender: 'Female'|'Male'|'Genderless'|'unknown';
    origin: TRickAndMortyOrigin;
    location: TRickAndMortyOrigin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export type TMainFormCards = {
    cards: TRickAndMortyCharacter[];
    showModalHandler?(): void;
    hideModalHandler?(): void;
    sendDataToParent(data:TRickAndMortyCharacter): void;
  };
  

  export type TReduxState = {
    searchData: string;
  }

  export type TReduxSearchAction = {
    type: string;
    value: string;
  }
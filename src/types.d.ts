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
  

  export type TReduxRootState = {
    searchData: string;
    searchResult: TRickAndMortyCharacter[]
  }

  export type TReduxSearchAction = {
    type: string;
    value: string;
  }
  export type TReduxLoadAction = {
    type: string;
    searchData: string;
  }
  export enum ActionTypes {
    ADD_SEARCH_DATA = "ADD_SEARCH_DATA",
    START_LOADING,
    LOAD_DATA_TO_STORE = "LOAD_DATA_TO_STORE",
    FINISH_LOADING
  }

  export type TRequestAnswer = {
    info: string,
    results: TRickAndMortyCharacter[]
  }

  export type TReduxReducers = {
    rootReducer: TReduxRootState
  }
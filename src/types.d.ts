export type TReduxSearch = {
  searchValue: string;
};

export type TRequestAnswer = {
  info: string;
  results: TRickAndMortyCharacter[];
};

export type TRickAndMortyCharacter = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: TRickAndMortyOrigin;
  location: TRickAndMortyOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TFormCardData = {
  id?: number;
  title: string;
  img?: string | undefined;
  price: string | undefined;
  date: string | undefined;
  color: 'red' | 'green' | 'black';
  isAvalible: boolean | undefined;
  boxSize: 'small' | 'medium' | 'big';
};

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TRequestAnswer } from 'types';

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<TRequestAnswer, string>({
      query: (name: string) => `character/?name=${name}`,
    }),
  }),
  refetchOnMountOrArgChange: true,
});
export const { useGetAllCharactersQuery } = rickApi;

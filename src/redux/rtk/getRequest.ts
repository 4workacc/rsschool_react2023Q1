import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRickAndMortyCharacter } from 'types'

// Define a service using a base URL and expected endpoints
export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<TRickAndMortyCharacter[], string>({
      query: (name) => `character/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterByNameQuery } = rickApi
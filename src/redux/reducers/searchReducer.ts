import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TReduxSearch } from '../../types';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  } as TReduxSearch,
  reducers: {
    setSearchValue: (state, { payload: { searchValue } }: PayloadAction<TReduxSearch>) => {
      state.searchValue = searchValue;
    },
  },
});

export const { actions, reducer } = searchSlice;

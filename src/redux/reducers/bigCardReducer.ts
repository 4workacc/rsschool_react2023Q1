import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRickAndMortyCharacter } from 'types';

type TBigCard = {
  isShow: boolean;
  cardData: TRickAndMortyCharacter | null;
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    isShow: false,
    cardData: null,
  } as TBigCard,
  reducers: {
    setBigCardValue: (state, { payload: { isShow, cardData } }: PayloadAction<TBigCard>) => {
      (state.isShow = isShow), (state.cardData = cardData);
    },
    hideBigCard: (state) => {
      state.isShow = false;
    },
  },
});

export const { actions, reducer } = cardSlice;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFormCardData } from 'types';

type TFormCards = {
    formCards: TFormCardData[],
}

export const formSlice = createSlice({
    name: 'form',
    initialState: {       
        formCards: []
    } as TFormCards,
    reducers: {
        setFormCards: (state, { payload: { formCards } }: PayloadAction<TFormCards>) => {
            (
                state.formCards = formCards
            )
        }       
    }
  },
);

export const { actions, reducer } = formSlice;

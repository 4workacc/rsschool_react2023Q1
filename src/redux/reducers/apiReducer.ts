import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRequestAnswer } from "types";

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        info: '',
        results: []
    } as TRequestAnswer,
    reducers: {
        setApiValue: (state, { payload: { info, results } }: PayloadAction<TRequestAnswer>) => {
            (state.info = info,  state.results = results);
        },
    },
});

export const { actions, reducer } = apiSlice;
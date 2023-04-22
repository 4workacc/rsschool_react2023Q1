import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as searchReducer } from './reducers/searchReducer';
import { reducer as cardReducer } from "./reducers/bigCardReducer";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { rickApi } from "./rtk/getRequest";
import { reducer as formReducer } from "./reducers/formReducer";

const reducers = combineReducers({
    searchReducer,
});

export const store = configureStore({
    reducer: {
        searchReducer: searchReducer,
        cardReducer: cardReducer,
        formReducer: formReducer,
        [rickApi.reducerPath]: rickApi.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickApi.middleware),
});


export type TRootState = ReturnType<typeof store.getState>;
export const useFullStateSelector: TypedUseSelectorHook<TRootState> = useSelector;

export type TFullDispatch = typeof store.dispatch;
export const useFullStateDispatch: () => TFullDispatch = useDispatch;
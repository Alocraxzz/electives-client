import mainSlice from "./mainSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    main: mainSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
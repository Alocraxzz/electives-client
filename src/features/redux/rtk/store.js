import studentsSlice from "./studentSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    students: studentsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
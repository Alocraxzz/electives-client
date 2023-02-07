import studentSlice from "../studentSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import electiveSlice from "../electiveSlice";
import examSlice from "../examSlice";
import subjectSlice from "../subjectSlice";

const rootReducer = combineReducers({
    students: studentSlice,
    electives: electiveSlice,
    exams: examSlice,
    subjects: subjectSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
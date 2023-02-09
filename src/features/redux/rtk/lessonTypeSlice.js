import { createSlice } from "@reduxjs/toolkit";
import LessonTypeService from "../../services/API/LessonTypeService";

export const Status = {
    idle: "idle",
    pending: "pending",
};

const lessonTypeSlice = createSlice({
    name: "lessonTypes",
    initialState: {
        lessonsTypes: [],
        lessonType: {},
        status: "idle",
        operationResult: null,
        isUpdateRequired: false,
    },
    reducers: {
        loading (state, action) {
            if (state.status === Status.idle) {
                state.status = Status.pending;
                state.isUpdateRequired = false;
            }
        },
        receivedMany (state, action) {
            if (state.status === Status.pending) {
                state.lessonsTypes = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOne (state, action) {
            if (state.status === Status.pending) {
                state.lessonType  = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOperation (state, action) {
            if (state.status === Status.pending) {
                state.operationResult  = action.payload;
                state.status           = Status.idle;
                state.isUpdateRequired = true;
            }
        },
    },
});

export default lessonTypeSlice.reducer;

const { loading, receivedMany, receivedOne, receivedOperation } = lessonTypeSlice.actions;

export const fetchLessonsTypes = () => async (dispatch) => {
    dispatch(loading());
    const response = await LessonTypeService.getAll();
    dispatch(receivedMany(response));
};

export const fetchOneLessonType = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await LessonTypeService.getOne(id);
    dispatch(receivedOne(response));
};

export const storeLessonType = (lessonType) => async (dispatch) => {
    dispatch(loading());
    const response = await LessonTypeService.store(lessonType);
    dispatch(receivedOperation(response));
};

export const updateLessonType = (id, lessonType) => async (dispatch) => {
    dispatch(loading());
    const response = await LessonTypeService.update(id, lessonType);
    dispatch(receivedOperation(response));
};

export const deleteOneLessonType = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await LessonTypeService.deleteOne(id);
    dispatch(receivedOperation(response));
};



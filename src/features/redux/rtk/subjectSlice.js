import { createSlice } from "@reduxjs/toolkit";
import SubjectService from "../../services/API/SubjectService";

export const Status = {
    idle: "idle",
    pending: "pending",
};

const subjectsSlice = createSlice({
    name: "subjects",
    initialState: {
        subjects: [],
        subject: {},
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
                state.subjects = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOne (state, action) {
            if (state.status === Status.pending) {
                state.subject  = action.payload;
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

export default subjectsSlice.reducer;

const { loading, receivedMany, receivedOne, receivedOperation } = subjectsSlice.actions;

export const fetchSubjects = () => async (dispatch) => {
    dispatch(loading());
    const response = await SubjectService.getAll();
    dispatch(receivedMany(response));
};

export const fetchOneSubject = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await SubjectService.getOne(id);
    dispatch(receivedOne(response));
};

export const storeSubject = (subject) => async (dispatch) => {
    dispatch(loading());
    const response = await SubjectService.store(subject);
    dispatch(receivedOperation(response));
};

export const updateSubject = (id, subject) => async (dispatch) => {
    dispatch(loading());
    const response = await SubjectService.update(id, subject);
    dispatch(receivedOperation(response));
};

export const deleteOneSubject = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await SubjectService.deleteOne(id);
    dispatch(receivedOperation(response));
};



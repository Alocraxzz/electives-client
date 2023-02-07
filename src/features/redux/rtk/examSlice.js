import { createSlice } from "@reduxjs/toolkit";
import ExamService from "../../services/API/ExamService";

export const Status = {
    idle: "idle",
    pending: "pending",
};

const examSlice = createSlice({
    name: "exams",
    initialState: {
        exams: [],
        exam: {},
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
                state.exams = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOne (state, action) {
            if (state.status === Status.pending) {
                state.exam  = action.payload;
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

export default examSlice.reducer;

const { loading, receivedMany, receivedOne, receivedOperation } = examSlice.actions;

export const fetchExams = () => async (dispatch) => {
    dispatch(loading());
    const response = await ExamService.getAll();
    dispatch(receivedMany(response));
};

export const fetchOneExam = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await ExamService.getOne(id);
    dispatch(receivedOne(response));
};

export const storeExam = (exam) => async (dispatch) => {
    dispatch(loading());
    const response = await ExamService.store(exam);
    dispatch(receivedOperation(response));
};

export const updateExam = (id, exam) => async (dispatch) => {
    dispatch(loading());
    const response = await ExamService.update(id, exam);
    dispatch(receivedOperation(response));
};

export const deleteOneExam = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await ExamService.deleteOne(id);
    dispatch(receivedOperation(response));
};



import { createSlice } from "@reduxjs/toolkit";
import StudentService from "../../services/API/StudentService";

export const Status = {
    idle: "idle",
    pending: "pending",
};

const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        student: {},
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
                state.students = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOne (state, action) {
            if (state.status === Status.pending) {
                state.student  = action.payload;
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

export default studentsSlice.reducer;

const { loading, receivedMany, receivedOne, receivedOperation } = studentsSlice.actions;

export const fetchStudents = () => async (dispatch) => {
    dispatch(loading());
    const response = await StudentService.getAll();
    dispatch(receivedMany(response));
};

export const fetchOneStudent = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await StudentService.getOne(id);
    dispatch(receivedOne(response));
};

export const storeStudent = (student) => async (dispatch) => {
    dispatch(loading());
    const response = await StudentService.store(student);
    dispatch(receivedOperation(response));
    fetchStudents();
};

export const updateStudent = (id, student) => async (dispatch) => {
    dispatch(loading());
    const response = await StudentService.update(id, student);
    dispatch(receivedOperation(response));
    fetchStudents();
};

export const deleteOneStudent = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await StudentService.deleteOne(id);
    dispatch(receivedOperation(response));
    fetchStudents();
};



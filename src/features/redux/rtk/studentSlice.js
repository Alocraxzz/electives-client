import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StudentService from "../../../API/StudentService";

export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async function () {
        return await StudentService.getAll();
    },
);

const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        status: "idle",
    },
    reducers: {
        async getStudents (state) {
            state.students = [];
        },
        addStudent (state, action) {
            console.log("add student from reducer: action.payload = ");
            console.log(action.payload);
            state.students.push(action.payload);
        },
    },
    extraReducers: (builder) => [
        builder.addCase(fetchStudents.pending, (state) => {
            state.status = "loading";
        }),
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.students = action.payload;
        }),
        builder.addCase(fetchStudents.rejected, (state) => {
            state.status = "rejected";
        }),
    ],
});

export default studentsSlice.reducer;
export const { getStudents, addStudent } = studentsSlice.actions;
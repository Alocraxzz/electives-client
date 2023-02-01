import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        students: [
            {name: "toolkit", surname: "toolkit"}
        ],
    },
    reducers: {
        getAll(state) {
            console.log("all students from reducer: ");
        },
        addStudent(state, action) {
            console.log("add student from reducer: action.payload = ");
            console.log(action.payload);
            state.students.push(action.payload);
        }
    }
});

export default mainSlice.reducer;
export const { getAll, addStudent } = mainSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import ElectiveService from "../../services/API/ElectiveService";

export const Status = {
    idle: "idle",
    pending: "pending",
};

const electiveSlice = createSlice({
    name: "electives",
    initialState: {
        electives: [],
        elective: {},
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
                state.electives = action.payload;
                state.status   = Status.idle;
            }
        },
        receivedOne (state, action) {
            if (state.status === Status.pending) {
                state.elective  = action.payload;
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

export default electiveSlice.reducer;

const { loading, receivedMany, receivedOne, receivedOperation } = electiveSlice.actions;

export const fetchElectives = () => async (dispatch) => {
    dispatch(loading());
    const response = await ElectivesService.getAll();
    dispatch(receivedMany(response));
};

export const fetchOneElective = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await ElectivesService.getOne(id);
    dispatch(receivedOne(response));
};

export const storeElective = (elective) => async (dispatch) => {
    dispatch(loading());
    const response = await ElectivesService.store(elective);
    dispatch(receivedOperation(response));
};

export const updateElective = (id, elective) => async (dispatch) => {
    dispatch(loading());
    const response = await ElectivesService.update(id, elective);
    dispatch(receivedOperation(response));
};

export const deleteOneElective = (id) => async (dispatch) => {
    dispatch(loading());
    const response = await ElectivesService.deleteOne(id);
    dispatch(receivedOperation(response));
};



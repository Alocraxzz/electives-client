import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeExam, updateExam } from "../../../../features/redux/rtk/examSlice";

export const ExamDialog = ({ initialState, openButtonTitle, title, startIcon, id }) => {
    const { exams }          = useSelector(state => state.exams);
    const [exam, setExam] = useState(initialState ?? { mark: "" });
    const dispatch              = useDispatch();

    const clearForm = () => {
        !id && setExam(initialState);
    };

    useEffect(() => {
        const exam = exams.find((elem) => elem._id === id);

        setExam(exam);
    }, [id]);

    const handleFormSubmit = () => {
        id ? dispatch(updateExam(id, exam))
            : dispatch(storeExam(exam));

        !id && setExam(initialState);
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add exam"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <TextField
                value={exam?.subject ?? ""}
                onChange={event => setExam({ ...exam, subject: event.target.value })}
                margin="dense"
                label="Subject"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={exam?.date ?? ""}
                onChange={event => setExam({ ...exam, date: event.target.value })}
                margin="dense"
                label="Date"
                type="datetime-local"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={exam?.mark ?? ""}
                onChange={event => setExam({ ...exam, mark: event.target.value })}
                margin="dense"
                label="Mark"
                type="text"
                variant="outlined"
                fullWidth
            />
        </FormDialog>
    );
};
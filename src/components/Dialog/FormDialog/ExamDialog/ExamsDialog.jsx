import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeExam, updateExam } from "../../../../features/redux/rtk/examSlice";
import { Autocomplete } from "@mui/material";
import { fetchSubjects } from "../../../../features/redux/rtk/subjectSlice";
import { fetchStudents } from "../../../../features/redux/rtk/studentSlice";

export const ExamDialog = ({ openButtonTitle, title, startIcon, id }) =>
 {
    const initialState = { student: {}, mark: "", date: "", subject: "" };

    const { exams }       = useSelector(state => state.exams);
    const { subjects }    = useSelector(state => state.subjects);
    const { students }    = useSelector(state => state.students);
    const [exam, setExam] = useState(initialState);
    const dispatch        = useDispatch();

    const reset = () => {
        const exam = exams.find((elem) => elem._id === id);

        setExam(exam);
    }

    useEffect(() => {
        dispatch(fetchSubjects());
        dispatch(fetchStudents());
    }, []);

    useEffect(() => {
        reset();
    }, [id]);

    const handleFormSubmit = () => {
        id ? dispatch(updateExam(id, exam))
            : dispatch(storeExam(exam));
    };

    const clearForm = () => {
        reset();
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add exam"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <Autocomplete
                disablePortal
                id="size-small-outlined"
                options={students}
                defaultValue={exam?.student}
                getOptionLabel={(option) => option?.firstName + ' ' + option?.secondName + ' ' + option?.thirdName }
                onChange={(event, value) => setExam({ ...exam, student: value?._id })}
                sx={{ mt: "10px" }}
                renderInput={(params) => {
                    return (
                        <TextField {...params} label="Students" variant="outlined" fullWidth/>
                    );
                }}
            />
            <Autocomplete
                disablePortal
                id="size-small-outlined"
                options={subjects}
                defaultValue={exam?.subject}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => setExam({ ...exam, subject: value._id })}
                sx={{ mt: "10px" }}
                renderInput={(params) => {
                    return (
                        <TextField {...params} label="Subjects" variant="outlined" fullWidth/>
                    );
                }}
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
                type="number"
                variant="outlined"
                fullWidth
                InputProps={{ inputProps: { min: 1, max: 5 } }}
            />
        </FormDialog>
    );
};
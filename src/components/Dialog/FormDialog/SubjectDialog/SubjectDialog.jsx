import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeSubject, updateSubject } from "../../../../features/redux/rtk/subjectSlice";

export const SubjectDialog = ({ initialState, openButtonTitle, title, startIcon, id }) => {
    const { subjects }          = useSelector(state => state.subjects);
    const [subject, setSubject] = useState(initialState ?? { name: "" });
    const dispatch              = useDispatch();

    const clearForm = () => {
        !id && setSubject(initialState);
    };

    useEffect(() => {
        const subject = subjects.find((elem) => elem._id === id);

        setSubject(subject);
    }, [id, subjects]);

    const handleFormSubmit = () => {
        id ? dispatch(updateSubject(id, subject))
            : dispatch(storeSubject(subject));

        !id && setSubject(initialState);
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add subject"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <TextField
                value={subject?.name ?? ""}
                onChange={event => setSubject({ ...subject, name: event.target.value })}
                margin="dense"
                label="Subject name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={subject?.load ?? ""}
                onChange={event => setSubject({ ...subject, load: event.target.value })}
                margin="dense"
                label="Load"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={subject?.from ?? ""}
                onChange={event => setSubject({ ...subject, from: event.target.value })}
                margin="dense"
                label="From"
                type="datetime-local"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={subject?.to ?? ""}
                onChange={event => setSubject({ ...subject, to: event.target.value })}
                margin="dense"
                label="To"
                type="datetime-local"
                variant="outlined"
                fullWidth
            />
        </FormDialog>
    );
};
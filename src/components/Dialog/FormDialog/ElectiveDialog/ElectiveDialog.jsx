import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeElective, updateElective } from "../../../../features/redux/rtk/electiveSlice";
import { Autocomplete } from "@mui/material";
import { fetchSubjects } from "../../../../features/redux/rtk/subjectSlice";
import { fetchLessonsTypes } from "../../../../features/redux/rtk/lessonTypeSlice";

export const ElectiveDialog = ({ initialState, openButtonTitle, title, startIcon, id }) => {
    const { electives }           = useSelector(state => state.electives);
    const { subjects }            = useSelector(state => state.subjects);
    const { lessonsTypes }        = useSelector(state => state.lessonsTypes);
    const [elective, setElective] = useState(initialState ?? { hours: "" });
    const dispatch                = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
        dispatch(fetchLessonsTypes());
    }, []);

    useEffect(() => {
        const elective = electives.find((elem) => elem._id === id);

        setElective(elective);
    }, [id]);

    const handleFormSubmit = () => {
        id ? dispatch(updateElective(id, elective))
            : dispatch(storeElective(elective));

        !id && setElective(initialState);
    };

    const transferSubject = (subject) => {
        setElective({ ...elective, subject: subject });
    };

    const transferLessonType = (lessonType) => {
        setElective({ ...elective, lessonType: lessonType });
    };

    const clearForm = () => {
        !id && setElective(initialState);
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add elective"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <Autocomplete
                disablePortal
                id="size-small-outlined"
                options={subjects}
                defaultValue={elective?.subject}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => setElective({ ...elective, subject: value._id })}
                sx={{ mt: "10px" }}
                renderInput={(params) => {
                    return (
                        <TextField {...params} label="Subjects" variant="outlined" fullWidth/>
                    );
                }}
            />
            <TextField
                value={elective?.from ?? ""}
                onChange={event => setElective({ ...elective, from: event.target.value })}
                margin="dense"
                label="From"
                type="date"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={elective?.to ?? ""}
                onChange={event => setElective({ ...elective, to: event.target.value })}
                margin="dense"
                label="To"
                type="date"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={elective?.hours ?? ""}
                onChange={event => setElective({ ...elective, hours: event.target.value })}
                margin="dense"
                label="Hours"
                type="text"
                variant="outlined"
                fullWidth
            />
            <Autocomplete
                disablePortal
                id="size-small-outlined"
                options={lessonsTypes}
                defaultValue={elective?.lessonType}
                getOptionLabel={(option) => option.type}
                onChange={(event, value) => setElective({ ...elective, lessonType: value._id })}
                sx={{ mt: "10px" }}
                renderInput={(params) => {
                    return (
                        <TextField {...params} label="Lesson type" variant="outlined" fullWidth/>
                    );
                }}
            />
        </FormDialog>
    );
};
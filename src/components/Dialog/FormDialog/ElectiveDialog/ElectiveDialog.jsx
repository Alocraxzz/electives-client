import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeElective, updateElective } from "../../../../features/redux/rtk/electiveSlice";
import { LessonTypeSelect } from "../../../Select/LessonTypeSelect";
import { Autocomplete } from "@mui/material";

export const ElectiveDialog = ({ initialState, openButtonTitle, title, startIcon, id }) => {
    const { electives }           = useSelector(state => state.electives);
    // const { subjects }            = useSelector(state => state.subjects);
    const [elective, setElective] = useState(initialState ?? { hours: "" });
    const dispatch                = useDispatch();

    const clearForm = () => {
        !id && setElective(initialState);
    };

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

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add elective"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            {/*<SubjectSelect initialValue={elective?.subject ?? ""} transferSubject={transferSubject}/>*/}
            {/*<Autocomplete*/}
            {/*    disablePortal*/}
            {/*    id="combo-box-demo"*/}
            {/*    options={subjects}*/}
            {/*    sx={{ width: 300 }}*/}
            {/*    renderInput={(params) => <TextField value={params?.name} label="Movie"/>}*/}
            {/*/>*/}
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
            <LessonTypeSelect initialValue={elective?.lessonType ?? ""} transferLessonType={transferLessonType}/>
        </FormDialog>
    );
};
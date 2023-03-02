import { FormDialog } from "../FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { storeStudent, updateStudent } from "../../../../features/redux/rtk/studentSlice";
import { Autocomplete } from "@mui/material";
import { fetchElectives } from "../../../../features/redux/rtk/electiveSlice";
import ElectivesSelect from "../../../Select/ElectivesSelect";

const icon        = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;
export const StudentDialog = ({ openButtonTitle, openButtonSize, title, startIcon, id }) => {
    const initialState = { firstName: "", secondName: "", thirdName: "", phone: "", address: "", electives: [] };

    const { electives }         = useSelector(state => state.electives);
    const { students }          = useSelector(state => state.students);
    const [student, setStudent] = useState(initialState);
    const dispatch              = useDispatch();

    useEffect(() => {
        dispatch(fetchElectives());
    }, []);

    const reset = () => {
        const student = students.find((elem) => elem._id === id);
        setStudent(student);
    };

    const clearForm = () => {
        reset();
    };

    useEffect(() => {
        reset();
    }, [id]);

    const handleFormSubmit = () => {
        id ? dispatch(updateStudent(id, student))
            : dispatch(storeStudent(student));
    };

    const transferElectives = (electives) => {
        setStudent({ ...student, electives: electives });
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            openButtonSize={openButtonSize}
            title={title ?? "Add student"}
            startIcon={startIcon ?? <AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <TextField
                value={student?.firstName ?? ""}
                onChange={event => setStudent({ ...student, firstName: event.target.value })}
                margin="dense"
                label="First Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student?.secondName ?? ""}
                onChange={event => setStudent({ ...student, secondName: event.target.value })}
                margin="dense"
                label="Second Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student?.thirdName ?? ""}
                onChange={event => setStudent({ ...student, thirdName: event.target.value })}
                margin="dense"
                label="Third Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student?.phone ?? ""}
                onChange={event => setStudent({ ...student, phone: event.target.value })}
                margin="dense"
                label="Phone"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student?.address ?? ""}
                onChange={event => setStudent({ ...student, address: event.target.value })}
                margin="dense"
                label="Address"
                type="text"
                variant="outlined"
                fullWidth
            />
            <ElectivesSelect initialValues={student?.electives} transferElectives={transferElectives} />
        </FormDialog>
    );
};
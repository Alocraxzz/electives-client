import { FormDialog } from "../FormDialog/FormDialog";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { fetchStudents, storeStudent } from "../../../features/redux/rtk/studentSlice";
import { useDispatch } from "react-redux";

export const StudentDialog = ({ studentInitialState }) => {
    const dispatch              = useDispatch();
    const [student, setStudent] = useState(studentInitialState);

    const clearForm = () => {
        setStudent(studentInitialState);
    }

    const handleFormSubmit = () => {
        dispatch(storeStudent(student));
        setStudent(studentInitialState);
    };

    return (
        <FormDialog
            openButtonTitle={"Add record"}
            title={"Add student"}
            startIcon={<AddIcon/>}
            handleFormSubmit={handleFormSubmit}
            clearForm={clearForm}
        >
            <TextField
                value={student.firstName}
                onChange={event => setStudent({ ...student, firstName: event.target.value })}
                margin="dense"
                label="First Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student.secondName}
                onChange={event => setStudent({ ...student, secondName: event.target.value })}
                margin="dense"
                label="Second Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student.thirdName}
                onChange={event => setStudent({ ...student, thirdName: event.target.value })}
                margin="dense"
                label="Third Name"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student.phone}
                onChange={event => setStudent({ ...student, phone: event.target.value })}
                margin="dense"
                label="Phone"
                type="text"
                variant="outlined"
                fullWidth
            />
            <TextField
                value={student.address}
                onChange={event => setStudent({ ...student, address: event.target.value })}
                margin="dense"
                label="Address"
                type="text"
                variant="outlined"
                fullWidth
            />
        </FormDialog>
    );
};
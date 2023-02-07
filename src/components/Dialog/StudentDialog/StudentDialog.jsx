import { FormDialog } from "../FormDialog/FormDialog";
import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { storeStudent, updateStudent } from "../../../features/redux/rtk/studentSlice";

export const StudentDialog = ({ studentInitialState, openButtonTitle, title, startIcon, id }) => {
    const { students } = useSelector(state => state.students);
    const [student, setStudent] = useState(studentInitialState);
    const dispatch              = useDispatch();


    const clearForm = () => {
        setStudent(studentInitialState);
    };

    useEffect(() => {
        const student = students.find((elem) => elem._id = id);

        debugger;

        setStudent(student);
    }, [id]);

    const handleFormSubmit = () => {
        id ? dispatch(updateStudent(id, student)) : dispatch(storeStudent(student));
        setStudent(studentInitialState);
    };

    return (
        <FormDialog
            openButtonTitle={openButtonTitle ?? "Add record"}
            title={title ?? "Add student"}
            startIcon={startIcon ?? <AddIcon/>}
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
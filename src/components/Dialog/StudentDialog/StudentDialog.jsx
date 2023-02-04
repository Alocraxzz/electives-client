import {FormDialog} from "../FormDialog/FormDialog";
import * as React from "react";
import {useEffect, useState} from "react";
import {addStudent} from "../../../features/redux/rtk/studentSlice";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

export const StudentDialog = () => {
    const [student, setStudent] = useState({
        firstName: '', secondName: '', thirdName: '', phone: '', address: '',
    });

    const handleSubmit = async (student) => {
        // rtk query handle
    }

    const CustomTextField = ({value, onChange, label, type}) => {
        return (
            <TextField
                value={value}
                onChange={onChange}
                autoFocus
                margin="dense"
                label={label}
                type={type}
                variant="outlined"
                fullWidth
            />
        );
    }

    return (
        <FormDialog
            dialogOpenButtonTitle={'Add record'}
            title={'Add student'}
            startIcon={<AddIcon/>}
            handleSubmit={handleSubmit}
        >
            <CustomTextField
                value={student.firstName}
                onChange={event => setStudent({...student, firstName: event.target.value})}
                label="First Name"
                type="text"
            />
            <CustomTextField
                value={student.firstName}
                onChange={event => setStudent({...student, firstName: event.target.value})}
                label="Second name"
                type="text"
            />
            <CustomTextField
                value={student.firstName}
                onChange={event => setStudent({...student, firstName: event.target.value})}
                label="Third Name"
                type="text"
            />
            <CustomTextField
                value={student.firstName}
                onChange={event => setStudent({...student, firstName: event.target.value})}
                label="Phone"
                type="text"
            />
            <CustomTextField
                value={student.firstName}
                onChange={event => setStudent({...student, firstName: event.target.value})}
                label="Address"
                type="text"
            />
        </FormDialog>
    );
}
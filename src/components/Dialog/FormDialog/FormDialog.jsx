import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const FormDialog = ({
    children, startIcon, openButtonTitle, openButtonSize,
    title, header, handleFormSubmit, clearForm,
}) => {
    const [open, setOpen] = useState(false);

    const handleSubmit = async () => {
        setOpen(false);
        handleFormSubmit();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        clearForm();
    };

    return (
        <div>
            <Button variant="outlined" size={openButtonSize ?? "small"}startIcon={startIcon} onClick={handleClickOpen}>
                {openButtonTitle ?? "Open dialog"}
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {header}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
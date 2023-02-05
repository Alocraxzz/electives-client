import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AlertDialog = ({ openButtonTitle, startIcon, title, header, onClick, maxWidth }) => {
    const [open, setOpen]           = React.useState(false);
    const [fullWidth, setFullWidth] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgree = () => {
        setOpen(false);
        onClick();
    };

    return (
        <div>
            <Button variant="outlined" startIcon={startIcon} onClick={handleClickOpen}>
                {openButtonTitle}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth ?? 'sm'}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {header}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAgree} autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
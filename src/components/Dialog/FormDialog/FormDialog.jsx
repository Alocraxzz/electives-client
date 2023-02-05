import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const FormDialog = ({ children, startIcon, openButtonTitle, title, header, maxWidth }) => {
    const [open, setOpen]           = useState(false)
    const [fullWidth, setFullWidth] = useState(true)

    const [email, setEmail]         = useState('')

    useEffect(() => {
        console.log('email: ' + email)
    }, [email])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" startIcon={startIcon} onClick={handleClickOpen}>
                {openButtonTitle ?? 'Open dialog'}
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth ?? "sm"}
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
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
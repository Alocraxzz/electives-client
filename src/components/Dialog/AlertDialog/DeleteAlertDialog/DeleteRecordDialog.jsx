import { AlertDialog } from '../AlertDialog'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteRecordDialog = ({ onClick }) => {
    const [openButtonTitle] = useState('Delete')
    const [title]           = useState('Delete confirmation')
    const [header]          = useState('Are you sure you want to delete the record?')
    const [startIcon]       = useState(<DeleteIcon/>)

    return (
        <AlertDialog
            openButtonTitle={openButtonTitle}
            title={title}
            header={header}
            startIcon={startIcon}
            onClick={onClick}
        />
    )
}
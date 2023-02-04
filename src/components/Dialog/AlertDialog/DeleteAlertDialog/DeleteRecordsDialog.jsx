import { AlertDialog } from '../AlertDialog'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteRecordsDialog = ({ onClick }) => {
    const [openButtonTitle] = useState('Delete all')
    const [title]           = useState('Delete confirmation')
    const [header]          = useState('Are you sure you want to delete the records?')
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
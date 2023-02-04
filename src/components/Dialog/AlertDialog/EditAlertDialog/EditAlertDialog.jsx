import { AlertDialog } from '../AlertDialog'
import { useState } from 'react'

export const EditAlertDialog = ({ openButtonTitle, startIcon, onClick}) => {
    const [title]  = useState('Edit record')

    return (
        <AlertDialog
            openButtonTitle={openButtonTitle}
            title={title}
            startIcon={startIcon}
            onClick={onClick}
        />
    )
}
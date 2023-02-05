import StudentService from '../../../features/services/API/StudentService'
import { DataGridTemplate } from '../DataGrid'
import { StudentDialog } from '../../Dialog/StudentDialog/StudentDialog'

export const StudentsDataGrid = () => {
    const headers = [
        { type: 'string', field: '_id',         label: 'ID' },
        { type: 'string', field: 'firstName',   label: 'First name' },
        { type: 'string', field: 'secondName',  label: 'Second name' },
        { type: 'string', field: 'thirdName',   label: 'Third name' },
        { type: 'string', field: 'phone',       label: 'Phone' },
        { type: 'string', field: 'address',     label: 'Address' },
    ]

    return (
        <DataGridTemplate
            service={StudentService}
            formDialog={<StudentDialog />}
            headers={headers}
        />
    )
}
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
    DataGrid,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import { AlertDialog } from '../Dialog/AlertDialog/AlertDialog'
import { DeleteAlertDialog, DeleteRecordDialog } from '../Dialog/AlertDialog/DeleteAlertDialog/DeleteRecordDialog'
import { EditAlertDialog } from '../Dialog/AlertDialog/EditAlertDialog/EditAlertDialog'
import { DeleteRecordsDialog } from '../Dialog/AlertDialog/DeleteAlertDialog/DeleteRecordsDialog'

const CustomToolbar = ({ formDialog, numSelected }) => {
    const handleDeleteAll = () => {
        console.log('delete all button handled')
    }

    const handleCreate = () => {
        console.log('create button handled')
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <GridToolbarContainer>
                        <GridToolbarQuickFilter/>
                    </GridToolbarContainer>
                    <GridToolbarContainer>
                        <GridToolbarColumnsButton/>
                        <GridToolbarFilterButton/>
                        <GridToolbarDensitySelector/>
                        <GridToolbarExport/>
                    </GridToolbarContainer>
                </div>
                <div style={{
                    display:        'flex',
                    flexDirection:  'column',
                    justifyContent: 'center',
                    alignItems:     'flex-end',
                }}>
                    {(numSelected > 0) ? (
                        <DeleteRecordsDialog onClick={handleDeleteAll}/>
                    ) : (
                        formDialog
                    )}
                </div>
            </div>
        </>
    )
}

export const DataGridTemplate = ({ data, deleteRecord, formDialog, headers }) => {
    const [snackbar, setSnackbar]               = useState(null)
    const [dataGridHeaders, setDataGridHeaders] = useState([])
    const [selectionModel, setSelectionModel]   = useState([])
    // const [data, setData]                       = useState([])

    useEffect(() => {
        console.log(selectionModel)
    }, [selectionModel])

    const handleCloseSnackbar = () => setSnackbar(null)

    const deleteData = (id) => {
        deleteRecord(id);
    }

    const createHeaders = (data) => {
        headers.forEach((header, index) => {
            setDataGridHeaders((prevState) => {
                return [...prevState, {
                    field:      header.field,
                    headerName: header.label,
                    type:       header.type,
                    flex:       1,
                    minWidth:   120,
                }]
            })
        })

        setDataGridHeaders((prevState) => {
            return [...prevState, {
                field:      'actions',
                headerName: 'actions',
                type:       'actions',
                minWidth:   240,
                getActions: ({ id }) => [
                    <EditAlertDialog
                        openButtonTitle={'Edit'}
                        startIcon={<EditIcon/>}
                        label="Edit"
                        onClick={() => deleteData(id)}
                    />,
                    <DeleteRecordDialog
                        onClick={() => deleteData(id)}
                    />,
                ],
            }]
        })
    }

    useEffect(() => {
        createHeaders(data)
    }, [])

    const columns = useMemo(
        () => data.filter((column) => column),
        [data],
    )

    const processRowUpdate = () => async (newRow) => {
        console.log('processRowUpdate')
        console.log(newRow)
        // // Make the HTTP request to save in the backend
        // const response = await mutateRow(newRow);
        // setSnackbar({ children: 'User successfully saved', severity: 'success' });
        // return response;
    }

    //
    const handleProcessRowUpdateError = useCallback((error) => {
        (data?.length > 0) && setSnackbar({ children: error.message, severity: 'error' })
    }, [])

    return (
        <Box sx={{ height: '80vh', width: '100%' }}>
            <DataGrid
                columns={dataGridHeaders}
                rows={columns}
                checkboxSelection
                disableSelectionOnClick
                editMode="row"
                getRowId={(row) => row._id}
                onSelectionModelChange={(newSelectionModel) =>
                    setSelectionModel(newSelectionModel)
                }
                components={{
                    Toolbar: CustomToolbar,
                }}
                componentsProps={{
                    toolbar: {
                        formDialog:  formDialog,
                        numSelected: selectionModel?.length,
                    },
                }}
                experimentalFeatures={{ newEditingApi: true }}
                onProcessRowUpdateError={handleProcessRowUpdateError}
                processRowUpdate={processRowUpdate}
            />
            {/*{!!snackbar && (*/}
            {/*    <Snackbar*/}
            {/*        open*/}
            {/*        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}*/}
            {/*        onClose={handleCloseSnackbar}*/}
            {/*        autoHideDuration={6000}*/}
            {/*    >*/}
            {/*        <Alert {...snackbar} onClose={handleCloseSnackbar} />*/}
            {/*    </Snackbar>*/}
            {/*)}*/}
        </Box>
    )
}
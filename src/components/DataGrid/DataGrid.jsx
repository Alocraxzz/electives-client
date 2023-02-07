import { cloneElement, useEffect, useState } from "react";
import {
    DataGrid,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { DeleteRecordDialog } from "../Dialog/AlertDialog/DeleteAlertDialog/DeleteRecordDialog";
import { DeleteRecordsDialog } from "../Dialog/AlertDialog/DeleteAlertDialog/DeleteRecordsDialog";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

const CustomToolbar = ({ formDialog, deleteRecord, selectionModel, numSelected }) => {
    const handleDeleteAll = () => {
        selectionModel.forEach((elem) => deleteRecord(elem));
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                }}>
                    {(numSelected > 0) ? (
                        <DeleteRecordsDialog onClick={handleDeleteAll}/>
                    ) : (
                        formDialog
                    )}
                </div>
            </div>
        </>
    );
};

export const DataGridTemplate = ({ data, deleteRecord, formDialog, headers }) => {
    const [dataGridHeaders, setDataGridHeaders] = useState([]);
    const [selectionModel, setSelectionModel]   = useState([]);
    const [snackbar, setSnackbar]               = useState("");

    // useEffect(() => {
    //     console.log(selectionModel);
    // }, [selectionModel]);

    const handleCloseSnackbar = () => setSnackbar(null);

    const createHeaders = () => {
        headers.forEach((header, index) => {
            setDataGridHeaders((prevState) => {
                return [...prevState, {
                    field: header.field,
                    headerName: header.label,
                    type: header.type,
                    flex: 1,
                    minWidth: 120,
                }];
            });
        });

        setDataGridHeaders((prevState) => {
            return [...prevState, {
                field: "actions",
                headerName: "actions",
                type: "actions",
                minWidth: 240,
                getActions: ({ id }) => {
                    const clonedFormDialog = cloneElement(formDialog, {
                        openButtonTitle: "Edit", title: "Edit record", startIcon: <EditIcon/>, id: id,
                    });

                    return [
                        clonedFormDialog,
                        <DeleteRecordDialog
                            onClick={() => {
                                deleteRecord(id);
                                setSnackbar("Successfully deleted");
                            }}
                        />,
                    ];
                },
            }];
        });
    };

    useEffect(() => {
        createHeaders(data);
    }, []);

    return (
        <Box sx={{ height: "80vh", width: "100%" }}>

            <DataGrid
                columns={dataGridHeaders}
                rows={data}
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
                        formDialog: formDialog,
                        deleteRecord: deleteRecord,
                        selectionModel: selectionModel,
                        numSelected: selectionModel?.length,
                    },
                }}
                experimentalFeatures={{ newEditingApi: true }}
            />
            {!!snackbar && (
                <Snackbar
                    open
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={1500}
                >
                    <Alert onClose={handleCloseSnackbar}>
                        {snackbar}
                    </Alert>
                </Snackbar>
            )}
        </Box>
    );
};
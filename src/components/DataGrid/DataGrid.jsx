import {useEffect, useMemo, useState} from "react";
import {DataGrid, GridActionsCellItem, GridToolbar} from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";

export const DataGridTemplate = ({service, headers}) => {
  const [dataGridHeaders, setDataGridHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    console.log(rowModesModel);
  }, [rowModesModel]);

  const deleteData = (id) => {
    // handle modal to confirm delete

    service.deleteOne(id);
  }

  const updateData = (id) => {
    console.log("update button toggled: parameter id equal = " + id);
  }

  const createHeaders = (data) => {
    headers.forEach((header, index) => {
      setDataGridHeaders((prevState) =>
        [...prevState, {field: header, headerName: header, flex: 1, editable: index}]);
    });

    setDataGridHeaders((prevState) =>
      [...prevState,
        {
          field: 'actions',
          headerName: 'actions',
          type: 'actions',
          maxWidth: 80,
          getActions: ({id}) => [
            <GridActionsCellItem
              icon={<EditIcon/>}
              label="Edit"
              onClick={() => updateData(id)}
            />,
            <GridActionsCellItem
              icon={<DeleteIcon/>}
              label="Delete"
              onClick={() => deleteData(id)}
            />
          ],
        }
      ]);
  }

  useEffect(() => {
    async function fetchStudents() {
      const data = await service.getAll();
      setData(data);
    }

    createHeaders(data);

    fetchStudents().catch((error) => console.log(error));
  }, []);

  const columns = useMemo(
    () => data.filter((column) => column),
    [data],
  );

  return (
    <Box sx={{height: "80vh", width: '100%'}}>
      <DataGrid
        columns={dataGridHeaders}
        rows={columns}
        checkboxSelection
        disableSelectionOnClick
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        components={{
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500},
          },
        }}
        experimentalFeatures={{newEditingApi: true}}
      />
    </Box>
  );
}
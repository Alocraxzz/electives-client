import {useEffect, useMemo, useState} from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowModes,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter
} from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

const CustomToolbar = () => {
  const handleDeleteAll = () => {
    console.log("delete all button handled");
  }

  const handleCreate = () => {
    console.log("create button handled");
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
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
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <Button onClick={handleCreate}>Create new</Button>
          <Button onClick={handleDeleteAll}>Delete all selected</Button>
        </div>
      </div>
    </>
  );
}

export const DataGridTemplate = ({service, headers}) => {
  const [dataGridHeaders, setDataGridHeaders] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(selectionModel);
  }, [selectionModel]);

  const deleteData = (id) => {
    // handle modal to confirm delete

    service.deleteOne(id);
  }

  const updateData = (id) => {
    console.log("update button toggled: parameter id equal = " + id);
  }

  const onCellEditCommit = (cellData) => {
    console.log(cellData);
  }

  const createHeaders = (data) => {
    headers.forEach((header, index) => {
      setDataGridHeaders((prevState) =>
        [...prevState, {
          field: header.field,
          headerName: header.field,
          type: header.type,
          flex: 1,
          minWidth: 120,
          editable: index
        }]);
    });

    setDataGridHeaders((prevState) =>
      [...prevState,
        {
          field: 'actions',
          headerName: 'actions',
          type: 'actions',
          minWidth: 80,
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
      data && setData(data);
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
        onCellEditCommit={onCellEditCommit}
        onSelectionModelChange={(newSelectionModel) =>
            setSelectionModel(newSelectionModel)
        }
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          toolbar: {numSelected: selected?.length}
        }}
        experimentalFeatures={{newEditingApi: true}}
      />
    </Box>
  );
}
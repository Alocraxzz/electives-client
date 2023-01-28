import {useEffect, useMemo, useState} from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export const DataGridTemplate = ({service, headers}) => {
  const [dataGridHeaders, setDataGridHeaders] = useState([]);
  const [data, setData] = useState([]);

  const createHeaders = () => {
    headers.forEach((header) => {
      setDataGridHeaders((prevState) =>
        [...prevState, { field: header, headerName: header, flex: 1, editable: true, }]);
    });
  }

  useEffect(() => {
    createHeaders();

    async function fetchStudents() {
      const data = await service.getAll();
      setData(data);
    }

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
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
}
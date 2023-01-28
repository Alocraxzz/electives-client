import StudentService from "../../../API/StudentService";
import {DataGridTemplate} from "../DataGrid";

export const StudentsDataGrid = () => {
  const headers = ['id', 'firstName', 'secondName', 'thirdName'];

  return (
    <DataGridTemplate service={StudentService} headers={headers}/>
  );
}
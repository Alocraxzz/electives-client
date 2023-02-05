import StudentService from "../../../features/services/API/StudentService";
import {DataGridTemplate} from "../DataGrid";

export const StudentsDataGrid = () => {
  const headers = [
    {type: "string", field: "_id", label: "id"},
    {type: "string", field: "firstName", label: "firstName"},
    {type: "string", field: "secondName", label: "secondName"},
    {type: "string", field: "thirdName", label: "thirdName"},
    {type: "string", field: "phone", label: "phone"},
  ];

  return (
    <DataGridTemplate service={StudentService} headers={headers}/>
  );
}
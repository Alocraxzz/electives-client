import { DataGridTemplate } from "../DataGrid";
import { StudentDialog } from "../../Dialog/FormDialog/StudentDialog/StudentDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneStudent, fetchStudents, Status } from "../../../features/redux/rtk/studentSlice";
import { useEffect } from "react";
import { LinearProgress } from "@mui/material";

const headers = [
    { type: "string", field: "_id", label: "ID" },
    { type: "string", field: "firstName", label: "First name" },
    { type: "string", field: "secondName", label: "Second name" },
    { type: "string", field: "thirdName", label: "Third name" },
    { type: "string", field: "phone", label: "Phone" },
    { type: "string", field: "address", label: "Address" },
    // {
    //     type: "string", field: "electives", label: "Electives",
    //     valueGetter: (value) => {
    //         let electives = "";
    //
    //         value.row.electives?.forEach(elective => {
    //             return electives += `${elective.subject.name} `
    //         });
    //
    //         return electives
    //     },
    // },
];

export const StudentsDataGrid = () => {
    const { students, status, isUpdateRequired } = useSelector(state => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
    }, [isUpdateRequired]);

    const handleDeleteOne = (id) => {
        dispatch(deleteOneStudent(id));
    };

    return (
        <>
            {students && students.length > 0 ? (
                <>
                <DataGridTemplate
                    data={students}
                    deleteRecord={handleDeleteOne}
                    formDialog={
                        <StudentDialog />
                    }
                    headers={headers}
                />
                {status === Status.pending &&
                    <LinearProgress color="inherit" />
                }
            </>
            ) : (
                <h3>There are no students</h3>
            )}
        </>
    );
};
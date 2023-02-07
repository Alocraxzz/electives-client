import { DataGridTemplate } from "../DataGrid";
import { StudentDialog } from "../../Dialog/StudentDialog/StudentDialog";
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
];

export const StudentsDataGrid = () => {
    const { students, status, isUpdateRequired } = useSelector(state => state.students);
    const dispatch                               = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
    }, [isUpdateRequired]);

    useEffect(() => {
        console.log(students);
    }, [students]);

    const deleteStudent = (id) => {
        dispatch(deleteOneStudent(id));
    };

    return (
        <>
            <DataGridTemplate
                data={students}
                deleteRecord={deleteStudent}
                formDialog={
                    <StudentDialog
                        initialState={
                            { firstName: "", secondName: "", thirdName: "", phone: "", address: "" }
                        }
                    />
                }
                headers={headers}
            />
            {status === Status.pending &&
                <LinearProgress color="inherit"/>
            }
        </>
    );
};
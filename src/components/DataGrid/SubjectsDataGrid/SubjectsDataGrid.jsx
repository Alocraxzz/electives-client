import { DataGridTemplate } from "../DataGrid";
import { SubjectDialog } from "../../Dialog/FormDialog/SubjectDialog/SubjectDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneSubject, fetchSubjects, Status } from "../../../features/redux/rtk/subjectSlice";
import { useEffect } from "react";
import { LinearProgress } from "@mui/material";

const headers = [
    { type: "string", field: "_id", label: "ID" },
    { type: "string", field: "name", label: "Name" },
    { type: "string", field: "load", label: "Load" },
    { type: "string", field: "from", label: "From" },
    { type: "string", field: "to", label: "To" },
];

export const SubjectsDataGrid = () => {
    const { subjects, status, isUpdateRequired } = useSelector(state => state.subjects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [isUpdateRequired]);

    const deleteSubject = (id) => {
        dispatch(deleteOneSubject(id));
    };

    return (
        <>
            {subjects && subjects.length > 0 ? (
                <>
                    <DataGridTemplate
                        data={subjects ?? []}
                        deleteRecord={deleteSubject}
                        formDialog={
                            <SubjectDialog
                                initialState={
                                    { name: "", load: "", from: "", to: "" }
                                }
                            />
                        }
                        headers={headers}
                    />
                    {status === Status.pending &&
                        <LinearProgress color="inherit" />
                    }
                </>
            ) : (
                <h3>There are no subjects</h3>
            )}
        </>
    );
};
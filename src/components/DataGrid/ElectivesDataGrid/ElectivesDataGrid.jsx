import { DataGridTemplate } from "../DataGrid";
import { ElectiveDialog } from "../../Dialog/FormDialog/ElectiveDialog/ElectiveDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneElective, fetchElectives, Status } from "../../../features/redux/rtk/electiveSlice";
import { useEffect } from "react";
import { LinearProgress } from "@mui/material";

const headers = [
    { type: "string", field: "_id", label: "ID" },
    {
        type: "string", field: "name", label: "Subject",
        valueGetter: (params) => {
            return params.row.subject.name;
        },
    },
    {
        type: "string", field: "from", label: "From",
        valueGetter: (params) => {
            return params.row.from;
        },
    },
    {
        type: "string", field: "to", label: "To",
        valueGetter: (params) => {
            return params.row.to;
        },
    },
    { type: "string", field: "hours", label: "Hours" },
    {
        type: "string", field: "type", label: "Lesson type",
        valueGetter: (params) => {
            return params.row.lessonType.type;
        },
    },
];

export const ElectivesDataGrid = () => {
    const { electives, status, isUpdateRequired } = useSelector(state => state.electives);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchElectives());
    }, [isUpdateRequired]);

    const deleteElective = (id) => {
        dispatch(deleteOneElective(id));
    };

    return (
        <>
            {electives && electives.length > 0 ? (
                <>
                    <DataGridTemplate
                        data={electives}
                        deleteRecord={deleteElective}
                        formDialog={
                            <ElectiveDialog
                                initialState={
                                    { subject: "", from: "", to: "", hours: "", lessonType: "" }
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
                <h3>There are no electives</h3>
            )}
        </>
    );
};
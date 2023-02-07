import { DataGridTemplate } from "../DataGrid";
import { ElectiveDialog } from "../../Dialog/ElectiveDialog/ElectiveDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneElective, fetchElectives, Status } from "../../../features/redux/rtk/electiveSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const headers = [
    { type: "string", field: "_id", label: "ID" },
    { type: "string", field: "firstName", label: "First name" },
    { type: "string", field: "secondName", label: "Second name" },
    { type: "string", field: "thirdName", label: "Third name" },
    { type: "string", field: "phone", label: "Phone" },
    { type: "string", field: "address", label: "Address" },
];

export const ElectivesDataGrid = () => {
    const { electives, status, isUpdateRequired } = useSelector(state => state.electives);
    const dispatch                                = useDispatch();

    useEffect(() => {
        dispatch(fetchElectives());
    }, [isUpdateRequired]);

    useEffect(() => {
        console.log(electives);
    }, [electives]);

    const deleteElective = (id) => {
        dispatch(deleteOneElective(id));
    };

    return (
        <>
            <DataGridTemplate
                data={electives}
                deleteRecord={deleteElective}
                formDialog={
                    <ElectiveDialog
                        initialState={
                            { firstName: "", secondName: "", thirdName: "", phone: "", address: "" }
                        }
                    />
                }
                headers={headers}
            />
            {status === Status.pending &&
                <CircularProgress color="inherit"/>
            }
        </>
    );
};
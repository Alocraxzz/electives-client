import { DataGridTemplate } from "../DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneExam, fetchExams, Status } from "../../../features/redux/rtk/examSlice";
import { useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { ExamDialog } from "../../Dialog/FormDialog/ExamDialog/ExamsDialog";

const headers = [
    { type: "string", field: "_id", label: "ID" },
    { type: "string", field: "mark", label: "Mark" },
    { type: "date", field: "date", label: "Date" },
    {
        type: "string", field: "name", label: "Subject",
        valueGetter: (params) => {
            return params.row.subject.name;
        },
    },
];

export const ExamsDataGrid = () => {
    const { exams, status, isUpdateRequired } = useSelector(state => state.exams);
    const dispatch                            = useDispatch();

    useEffect(() => {
        dispatch(fetchExams());
    }, [isUpdateRequired]);

    // useEffect(() => {
    //     console.log(exams);
    // }, [exams]);

    const deleteExam = (id) => {
        dispatch(deleteOneExam(id));
    };

    return (
        <>
            <DataGridTemplate
                data={exams}
                deleteRecord={deleteExam}
                formDialog={
                    <ExamDialog
                        initialState={
                            { mark: "", date: "", subject: "" }
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
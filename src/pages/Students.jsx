import React, {useEffect} from 'react';
import {ResponsiveDrawer} from "../components/Drawer/ResponsiveDrawer";
import {StudentsDataGrid} from "../components/DataGrid/StudentsDataGrid/StudentsDataGrid";
import classes from './styles/PagesStyle.module.css';
import {FormDialog} from "../components/Dialog/FormDialog";
import {useDispatch, useSelector} from "react-redux";
// import {addStudent, getAll} from "../app/redux/rtk/mainSlice";
import {useAddStudentsMutation, useGetStudentsQuery} from "../features/redux/api/apiSlice";

export const Students = () => {
    const { data: students, isLoading, isSuccess, isError, error } = useGetStudentsQuery();
    const [addStudent] = useAddStudentsMutation();

    const handleAddStudent = async () => {
        await addStudent({
            "firstName": "new",
            "secondName": "new",
            "thirdName": "new",
            "phone": "+380636649466",
            "address": "Karmeluka 5, 40",
            "electives": [],
            "exams": [],
        });
    }

    // const students = useSelector(state => state.main.students);
    const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     console.log("all students from reducer: ");
    //     console.log(students);
    // }, [students]);

    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isSuccess) {
        content = students.map(student => <div key={student._id}>{student.firstName}</div>)
    } else if (isError) {
        content = <div>error.data</div>
    }

    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                {students?.map(student => <div key={student._id}>{student.firstName}</div>)}
                {/*<FormDialog/>*/}
                {/*<StudentsDataGrid/>*/}
                {/*<button onClick={() => dispatch(getAll())}>Get All Students</button>*/}
                {/*<button onClick={() => dispatch(getStudents())}>Get All Students</button>*/}
                {/*<button onClick={() => dispatch(addStudent({name: "new", surname: "new"}))}>Add Student</button>*/}
                <button onClick={handleAddStudent}>Add Student</button>
            </ResponsiveDrawer>
        </div>
    )
}
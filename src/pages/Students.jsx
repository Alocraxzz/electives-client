import React, { useEffect, useState } from 'react';
import classes from './styles/PagesStyle.module.css';
import { ResponsiveDrawer } from '../components/Drawer/ResponsiveDrawer';
import { useDispatch, useSelector } from "react-redux";
import { StudentsDataGrid } from '../components/DataGrid/StudentsDataGrid/StudentsDataGrid';
import StudentService from '../API/StudentService';
import { fetchStudents } from "../features/redux/rtk/studentSlice";

export const Students = () => {
    const students = useSelector(state => state.students.students);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchStudents());
    }, []);

    useEffect(() => {
        console.log(students);
    }, [students]);

    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                {/*<StudentsDataGrid/>*/}
                {students?.map((student) => <div key={student._id}>{student.firstName}</div>)}
            </ResponsiveDrawer>
        </div>
    );
};
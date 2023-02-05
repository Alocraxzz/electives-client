import React, { useEffect } from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/redux/rtk/studentSlice";
import { StudentsDataGrid } from "../components/DataGrid/StudentsDataGrid/StudentsDataGrid";

export const Students = () => {

    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <StudentsDataGrid />
            </ResponsiveDrawer>
        </div>
    );
};
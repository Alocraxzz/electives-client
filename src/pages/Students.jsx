import React from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { useSelector } from "react-redux";
import { StudentsDataGrid } from "../components/DataGrid/StudentsDataGrid/StudentsDataGrid";
import { Status } from "../features/redux/rtk/studentSlice";

export const Students = () => {
    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <StudentsDataGrid/>
            </ResponsiveDrawer>
        </div>
    );
};
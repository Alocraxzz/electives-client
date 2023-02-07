import React from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { StudentsDataGrid } from "../components/DataGrid/StudentsDataGrid/StudentsDataGrid";

export const Students = () => {
    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <StudentsDataGrid/>
            </ResponsiveDrawer>
        </div>
    );
};
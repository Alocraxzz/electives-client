import React from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { SubjectsDataGrid } from "../components/DataGrid/SubjectsDataGrid/SubjectsDataGrid";

export const Subjects = () => {
    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <SubjectsDataGrid />
            </ResponsiveDrawer>
        </div>
    );
};
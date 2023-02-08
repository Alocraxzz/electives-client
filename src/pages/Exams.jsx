import React from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { ExamsDataGrid } from "../components/DataGrid/ExamsDataGrid/ExamsDataGrid";

export const Exams = () => {
    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <ExamsDataGrid />
            </ResponsiveDrawer>
        </div>
    );
};
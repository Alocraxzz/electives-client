import React from "react";
import classes from "./styles/PagesStyle.module.css";
import { ResponsiveDrawer } from "../components/Drawer/ResponsiveDrawer";
import { ElectivesDataGrid } from "../components/DataGrid/ElectivesDataGrid/ElectivesDataGrid";

export const Electives = () => {
    return (
        <div className={classes.mainContent}>
            <ResponsiveDrawer>
                <ElectivesDataGrid />
            </ResponsiveDrawer>
        </div>
    );
};
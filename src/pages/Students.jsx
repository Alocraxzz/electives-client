import React from 'react';
import {ResponsiveDrawer} from "../components/Drawer/ResponsiveDrawer";
import {StudentsDataGrid} from "../components/DataGrid/StudentsDataGrid/StudentsDataGrid";
import classes from './PagesStyle.module.css';

export const Students = () => {
  return (
    <div className={classes.mainContent}>
      <ResponsiveDrawer>
        <StudentsDataGrid/>
      </ResponsiveDrawer>
    </div>
  )
}
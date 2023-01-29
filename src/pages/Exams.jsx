import React from 'react';
import classes from "./PagesStyle.module.css";
import {ResponsiveDrawer} from "../components/Drawer/ResponsiveDrawer";

export const Exams = () => {
  return (
    <div className={classes.mainContent}>
      <ResponsiveDrawer>
        Exams Grid
      </ResponsiveDrawer>
    </div>
  )
}
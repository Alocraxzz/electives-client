import React from 'react';
import classes from "./styles/PagesStyle.module.css";
import {ResponsiveDrawer} from "../components/Drawer/ResponsiveDrawer";

export const Subjects = () => {
  return (
    <div className={classes.mainContent}>
      <ResponsiveDrawer>
        Subject Grid
      </ResponsiveDrawer>
    </div>
  )
}
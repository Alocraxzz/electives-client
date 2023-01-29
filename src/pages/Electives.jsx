import React from 'react';
import classes from "./PagesStyle.module.css";
import {ResponsiveDrawer} from "../components/Drawer/ResponsiveDrawer";

export const Electives = () => {
  return (
    <div className={classes.mainContent}>
      <ResponsiveDrawer>
        Electives Grid
      </ResponsiveDrawer>
    </div>
  )
}
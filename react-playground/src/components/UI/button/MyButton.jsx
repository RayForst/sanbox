import { Button } from "@mui/material";
import React from "react";
import classes from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" {...props} className={classes.myBtn}>
      {children}
    </Button>
  );
};

export default MyButton;

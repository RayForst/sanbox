import { Input } from "@mui/material";
import React from "react";
import classes from "./MyInput.module.scss";

const MyInput = (props) => {
  return <Input {...props} className={classes.myInput} />;
};

export default MyInput;

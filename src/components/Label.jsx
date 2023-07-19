import React from "react";
import classes from "./inputs/input.module.scss";

const Label = ({ title }) => {
  return (
    <label className={classes["my-label"]} htmlFor="">
      {title}
    </label>
  );
};

export default Label;

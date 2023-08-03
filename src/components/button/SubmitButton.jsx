import React from "react";
import classes from "../inputs/input.module.scss";

const SubmitButton = ({ label, className = "", onClick = () => {} }) => {
  return (
    <button
      type="submit"
      className={`${classes["my-input"]} ${className}`}
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

import React from "react";
import classes from "./my-button.module.scss";

const MyButton = ({ text, bgColor = "green", onClick }) => {
  return (
    <button
      className={`${classes["my-button"]} ${classes[bgColor]}`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default MyButton;

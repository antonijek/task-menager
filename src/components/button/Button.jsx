import React from "react";
import classes from "./button.module.scss";

const Button = ({ text, bgColor = "green", onClick }) => {
  return (
    <button
      className={`${classes["my-button"]} ${classes[bgColor]}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;

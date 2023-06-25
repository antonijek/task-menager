import React from "react";
import classes from "./card.module.scss";

const Card = ({ title = "", description = "" }) => {
  return (
    <div className={classes["card"]}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;

import React from "react";
import classes from "./card.module.scss";
import { Card as AntdCard } from "antd";

const Card = ({ name = "", description = "" }) => {
  return (
    <AntdCard className={classes["card"]} name={name}>
      {description}
    </AntdCard>
  );
};

export default Card;

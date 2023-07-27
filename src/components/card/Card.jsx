import React from "react";
import classes from "./card.module.scss";
import { Card as AntdCard } from "antd";

const Card = ({ title = "", description = "" }) => {
  return (
    <AntdCard className={classes["card"]} title={title}>
      {description}
    </AntdCard>
  );
};

export default Card;

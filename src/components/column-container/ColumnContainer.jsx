import React from "react";
import classes from "./column-container.module.scss";
import Card from "../card/Card";

const ColumnContainer = ({ list = [], columnTitle = "" }) => {
  return (
    <div className={classes["column"]}>
      <h2 className={classes["column-title"]}>
        {columnTitle}
        {` (${list.length})`}
      </h2>

      {list?.map((task, index) => (
        <Card key={index} title={task.title} description={task.description} />
      ))}
    </div>
  );
};

export default ColumnContainer;

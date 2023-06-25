import React from "react";
import { allTasks } from "../../my-constants/myTasks";
import classes from "./my-input.module.scss";

const MyInput = ({ setTasks }) => {
  const searchTask = (arr, e) => {
    let filteredArr = arr.map((item) => {
      return {
        listName: item.listName,
        tasks: item.tasks.filter((task) =>
          task.title.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      };
    });
    setTasks(filteredArr);
  };

  return (
    <input
      className={classes["my-input"]}
      placeholder="Search"
      type="text"
      onChange={(e) => searchTask(allTasks, e)}
    />
  );
};

export default MyInput;

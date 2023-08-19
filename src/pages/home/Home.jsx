import React, { useState } from "react";
import classes from "./home.module.scss";
import style from "../../components/inputs/input.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import InputSearch from "../../components/inputs/InputSearch";
import wrapperHOC from "../wrapperHOC/wraperHOC";
import AuthHoc from "../authHOC/AuthHoc";
import { getAllTasks } from "../../services/taskServices";

import { Button, DatePicker, Space, version } from "antd";

const Home = ({ tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const searchTask = (arr, value) => {
    let filteredArr = arr.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredTasks(filteredArr);
  };

  let wishList = filteredTasks.filter((item) => item.status === "Wish List");
  let toDo = filteredTasks.filter((item) => item.status === "To-Do List");
  let inProgress = filteredTasks.filter(
    (item) => item.status === "In-Progress List"
  );
  let done = filteredTasks.filter((item) => item.status === "Done List");

  return (
    <div>
      <InputSearch
        className={style["search-input"]}
        placeholder="Search..."
        onChange={(value) => searchTask(tasks, value)}
      />
      <div className={classes["home"]}>
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 1)}
          columnTitle="Wish List"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 2)}
          columnTitle="To Do"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 3)}
          columnTitle="In-Progress List"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 4)}
          columnTitle="Done List"
        />
      </div>
    </div>
  );
};

export default AuthHoc(wrapperHOC(Home));

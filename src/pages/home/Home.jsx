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

  return (
    <div>
      {/*  <InputSearch
        className={style["search-input"]}
        placeholder="Search..."
        onChange={(value) => searchTask(tasks, value)}
      /> */}
      <div className={classes["home"]}>
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 1)}
          columnTitle="New Task"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 2)}
          columnTitle="In progress"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 3)}
          columnTitle="Complete"
        />
        <ColumnContainer
          list={tasks.filter((item) => item.status_id === 4)}
          columnTitle="Delete"
        />
      </div>
    </div>
  );
};

export default AuthHoc(wrapperHOC(Home));

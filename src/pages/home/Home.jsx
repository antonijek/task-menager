// Home.jsx
import React, { useState } from "react";
import classes from "./home.module.scss";
import style from "../../components/inputs/input.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import Input from "../../components/inputs/Input";
import InputSearch from "../../components/inputs/InputSearch";

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
        className={style["my-input"]}
        placeholder="Search"
        onChange={(value) => searchTask(tasks, value)}
      />
      <div className={classes["home"]}>
        <ColumnContainer list={wishList} columnTitle="Wish List" />
        <ColumnContainer list={toDo} columnTitle="To Do" />
        <ColumnContainer list={inProgress} columnTitle="In-Progress List" />
        <ColumnContainer list={done} columnTitle="Done List" />
      </div>
    </div>
  );
};

export default Home;

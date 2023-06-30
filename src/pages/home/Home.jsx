import React, { useState } from "react";
import classes from "./home.module.scss";
import style from "../../components/input/input.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import MyInput from "../../components/input/Input";

const Home = ({ tasks, setTasks }) => {
  const [searchInput, setSearchInput] = useState();
  const [copyTasks, setCopytasks] = useState(tasks);

  const searchTask = (arr, e) => {
    setSearchInput(e.target.value);
    let filteredArr = arr.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setCopytasks(filteredArr);
  };
  let wishList = copyTasks.filter((item) => item.status === "Wish List");
  let toDo = copyTasks.filter((item) => item.status === "To-Do List");
  let inProgress = copyTasks.filter(
    (item) => item.status === "In-Progress List"
  );
  let done = copyTasks.filter((item) => item.status === "Done List");

  return (
    <div>
      <MyInput
        className={style["my-input"]}
        placeholder="Search"
        onChange={(e) => searchTask(tasks, e)}
        value={searchInput}
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

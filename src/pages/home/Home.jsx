import React, { useState } from "react";
import classes from "./home.module.scss";
import style from "../../components/my-input/my-input.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import MyInput from "../../components/my-input/MyInput";

const Home = ({ tasks, setTasks }) => {
  const [searchInput, setSearchInput] = useState();
  const [copyTasks, setCopytasks] = useState(tasks);

  const searchTask = (arr, e) => {
    setSearchInput(e.target.value);
    let filteredArr = arr.map((item) => {
      return {
        listName: item.listName,
        tasks: item.tasks.filter((task) =>
          task.title.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      };
    });
    setCopytasks(filteredArr);
  };

  return (
    <div>
      <MyInput
        className={style["my-input"]}
        placeholder="Search"
        onChange={(e) => searchTask(tasks, e)}
        value={searchInput}
      />
      <div className={classes["home"]}>
        {copyTasks.map((item, index) => (
          <ColumnContainer
            key={index}
            list={item.tasks}
            columnTitle={item.listName}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

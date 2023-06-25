import React, { useState } from "react";
import classes from "./home.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import { allTasks } from "../../assets/myLists";

const Home = () => {
  const [tasks, setTasks] = useState(allTasks);

  const searchTask = (arr, e) => {
    let filteredArr = arr.map((item) => {
      return {
        listName: item.listName,
        tasks: item.tasks.filter((task) => task.title.includes(e.target.value)),
      };
    });
    setTasks(filteredArr);
  };

  return (
    <div>
      <input type="text" onChange={(e) => searchTask(allTasks, e)} />
      <div className={classes["home"]}>
        {tasks.map((item, index) => (
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

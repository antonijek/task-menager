import React, { useState } from "react";
import classes from "./home.module.scss";
import ColumnContainer from "../../components/column-container/ColumnContainer";
import { allTasks } from "../../my-constants/myTasks";
import MyInput from "../../components/my-input/MyInput";

const Home = () => {
  const [tasks, setTasks] = useState(allTasks);

  return (
    <div>
      <MyInput setTasks={setTasks} />
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

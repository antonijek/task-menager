import React, { useEffect } from "react";

import { useTaskData } from "../../context/TaskContext";
import classes from "../../pages/task-menagment/task-managment.module.scss";
//import Button from "../../components/button/Button";
import { Button } from "antd";
import { statuses } from "../../constants/statuses";

const Buttons = () => {
  const {
    setAllTasksCopy,
    tasks,
    setIsFormEditOpen,
    setIsFormNewOpen,
    deletedTasks,
    setDeletedTasks,
  } = useTaskData();

  useEffect(() => {
    setAllTasksCopy(tasks);
  }, [tasks]);

  const openFormForNewTask = () => {
    setIsFormNewOpen(true);
    setIsFormEditOpen(false);
  };

  const showAllTasks = () => {
    setAllTasksCopy(tasks);
  };

  const showDeletedTasks = () => {
    if (deletedTasks.length < 1) {
      setDeletedTasks([{ title: "/", status: "/" }]);
    }
    setAllTasksCopy(deletedTasks);
  };

  const selectTabs = (e) => {
    setAllTasksCopy(tasks.filter((item) => item.status === e));
  };

  return (
    <div className={classes["buttons"]}>
      <Button
        type="primary"
        className={classes["green-button"]}
        onClick={(e) => showAllTasks(e)}
      >
        All tasks
      </Button>
      {statuses.map((item) => (
        <Button
          type="primary"
          className={classes["green-button"]}
          key={item}
          onClick={() => selectTabs(item)}
        >
          {item}
        </Button>
      ))}

      <Button
        type="primary"
        className={classes["green-button"]}
        onClick={() => showDeletedTasks()}
      >
        Deleted
      </Button>
      <Button
        type="primary"
        className={classes["blue-button"]}
        onClick={openFormForNewTask}
      >
        Add new task
      </Button>
    </div>
  );
};

export default Buttons;

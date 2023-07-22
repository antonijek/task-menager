import React, { useEffect } from "react";

import { useTaskData } from "../../context/TaskContext";
import classes from "../../pages/task-menagment/task-managment.module.scss";
//import Button from "../../components/button/Button";
import { Button } from "antd";
import { statuses } from "../../constants/statuses";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const { setAllTasksCopy, tasks, deletedTasks, setDeletedTasks } =
    useTaskData();
  const navigate = useNavigate();

  useEffect(() => {
    setAllTasksCopy(tasks);
  }, [tasks]);

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
        onClick={() => navigate("/new-task")}
      >
        Add new task
      </Button>
    </div>
  );
};

export default Buttons;

import React, { useEffect } from "react";

import { useTaskData } from "../../context/TaskContext";
import classes from "../../pages/task-menagment/task-managment.module.scss";
import Button from "../../components/button/Button";
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
      <Button text="All tasks" onClick={(e) => showAllTasks(e)} />
      {statuses.map((item) => (
        <Button key={item} text={item} onClick={() => selectTabs(item)} />
      ))}

      <Button text="Deleted" onClick={() => showDeletedTasks()} />
      <Button
        text=" Add new task"
        bgColor="blue"
        onClick={openFormForNewTask}
      />
    </div>
  );
};

export default Buttons;

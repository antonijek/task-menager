import React, { useEffect } from "react";
import { useTaskData } from "../../context/TaskContext";
import classes from "../../pages/task-menagment/task-managment.module.scss";
import Button from "../../components/button/Button";
import { statuses } from "../../constants/statuses";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import Form from "../form/Form";
import { getAllTasks } from "../../services/taskServices";

const Buttons = () => {
  const {
    setAllTasksCopy,
    tasks,
    setTasks,
    deletedTasks,
    setDeletedTasks,
    setSpiner,
  } = useTaskData();
  const navigate = useNavigate();
  const modal = useModal();

  /*  const showAllTasks = async() => {
    try{
      const res = await getAllTasks()
      
    }
   
  }; */

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
        onClick={(e) => navigate("/task-menagment")}
        text="All tasks"
      />
      <Button
        type="primary"
        className={classes["green-button"]}
        onClick={() => showDeletedTasks()}
        text="Deleted"
      />

      <Button
        type="primary"
        className={classes["blue-button"]}
        onClick={() =>
          modal.open(
            "Add new-task",
            <Form setTasks={setTasks} setSpiner={setSpiner} />
          )
        }
        text="Add new task"
      />
    </div>
  );
};

export default Buttons;

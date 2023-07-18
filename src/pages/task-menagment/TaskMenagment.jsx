import React, { useEffect, useState, useContext } from "react";
import NewTask from "../../components/new-task/NewTask";
import classes from "./task-managment.module.scss";
import EditTask from "../../components/edit-task/EditTask";
import Table from "../../components/table/Table";
import TaskProvider from "../../context/TaskContext";
import Buttons from "../../components/buttons/Buttons";
import Button from "../../components/button/Button";
import wrapperHOC from "../wrapperHOC/wraperHOC";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [allTasksCopy, setAllTasksCopy] = useState(tasks);
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [isFormNewOpen, setIsFormNewOpen] = useState(false);
  const [deletedTasks, setDeletedTasks] = useState([]);

  let headers = [
    { title: "Name", index: "title" },
    { title: "Status", index: "status" },
    {
      title: "Actions",
      index: null,
      render: (data) => {
        return (
          <div className={classes["action-buttons"]}>
            <Button
              text={"Edit"}
              onClick={() => onEditTask(data)}
              bgColor="blue"
            />
            <Button
              text={"Delete"}
              onClick={() => onDeleteTask(data)}
              bgColor="red"
            />
          </div>
        );
      },
    },
  ];

  const providedData = {
    allTasksCopy,
    setAllTasksCopy,
    taskIndex,
    tasks,
    setTasks,
    editableTask,
    setEditableTask,
    setIsFormEditOpen,
    setIsFormNewOpen,
    deletedTasks,
    setDeletedTasks,
    header: headers,
    data: allTasksCopy,
  };

  const onEditTask = (task) => {
    setEditableTask(task);
    setTaskIndex(tasks.indexOf(task));
    setIsFormEditOpen(true);
    setIsFormNewOpen(false);
  };
  const onDeleteTask = (task) => {
    setTasks({ type: "delete-task", data: task });
    setDeletedTasks([...deletedTasks, task]);
  };

  return (
    <div>
      <TaskProvider data={providedData}>
        {isFormEditOpen && <EditTask />}
        {isFormNewOpen && <NewTask />}
        <Buttons />
        <Table />
      </TaskProvider>
    </div>
  );
};

export default wrapperHOC(TaskMenagment);

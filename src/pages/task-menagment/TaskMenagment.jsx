import React, { useState } from "react";
import classes from "./task-managment.module.scss";
import Table from "../../components/table/Table";
import TaskProvider from "../../context/TaskContext";
import Buttons from "../../components/buttons/Buttons";
import Button from "../../components/button/Button";
//import { Button } from "antd";
import wrapperHOC from "../wrapperHOC/wraperHOC";
import { useNavigate } from "react-router-dom";
import AuthHoc from "../authHOC/AuthHoc";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [allTasksCopy, setAllTasksCopy] = useState(tasks);
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();

  const [isFormNewOpen, setIsFormNewOpen] = useState(false);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const navigate = useNavigate();

  let headers = [
    { title: "Name", dataIndex: "title" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      dataIndex: null,
      render: (data) => {
        return (
          <div className={classes["action-buttons"]}>
            <Button
              className={classes["blue-button"]}
              onClick={() => onEditTask(data)}
              text="   Edit"
            />

            <Button
              className={classes["red-button"]}
              text="Delete"
              onClick={() => onDeleteTask(data)}
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
    setIsFormNewOpen,
    deletedTasks,
    setDeletedTasks,
    header: headers,
    data: allTasksCopy,
  };

  const onEditTask = (task) => {
    navigate(`/task-menagment/${task.key}`);
  };
  const onDeleteTask = (task) => {
    setTasks({ type: "delete-task", data: task });
    setDeletedTasks([...deletedTasks, task]);
  };

  return (
    <div>
      <TaskProvider data={providedData}>
        <Buttons />
        <Table columns={headers} dataSource={allTasksCopy} />
      </TaskProvider>
    </div>
  );
};

export default AuthHoc(wrapperHOC(TaskMenagment));

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
import { useModal } from "../../context/ModalContext";
import Form from "../../components/form/Form";
import { deleteTask } from "../../services/taskServices";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [allTasksCopy, setAllTasksCopy] = useState(tasks);
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();

  const modal = useModal();

  const [isFormNewOpen, setIsFormNewOpen] = useState(false);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const navigate = useNavigate();

  let headers = [
    { title: "Name", dataIndex: "name" },
    { title: "Status", dataIndex: "status_id" },
    { title: "Category", dataIndex: "category_id" },
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
    modal.open("Edit new-task", <Form data={task} />);
  };
  const onDeleteTask = async (task) => {
    try {
      const res = await deleteTask(task.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <TaskProvider data={providedData}>
        <Buttons />

        <Table columns={headers} dataSource={tasks} />
      </TaskProvider>
    </div>
  );
};

export default AuthHoc(wrapperHOC(TaskMenagment));

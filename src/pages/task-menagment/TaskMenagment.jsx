import React, { useState } from "react";
import NewTask from "../../components/new-task/NewTask";
import classes from "./task-managment.module.scss";
import MyEditForm from "../../components/my-form/MyEditForm";
import MyButton from "../../components/my-button/MyButton";
import { statuses } from "../../my-constants/statuses";
import Table from "../../components/table/Table";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [allTasksCopy, setAllTasksCopy] = useState(tasks);
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [isFormNewOpen, setIsFormNewOpen] = useState(false);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const onEditTask = (task) => {
    setEditableTask(task);
    setTaskIndex(tasks.indexOf(task));
    setIsFormEditOpen(true);
  };
  const onDeleteTask = (task) => {
    let index = tasks.indexOf(task);
    let newTasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    setTasks(newTasks);
    setDeletedTasks([...deletedTasks, task]);
  };

  let headers = [
    { title: "Name", index: "title" },
    { title: "Status", index: "status" },
    {
      title: "Actions",
      index: null,
      render: (data) => {
        return (
          <div className={classes["action-buttons"]}>
            <MyButton
              text={"Edit"}
              onClick={() => onEditTask(data)}
              bgColor="blue"
            />
            <MyButton
              text={"Delete"}
              onClick={() => onDeleteTask(data)}
              bgColor="red"
            />
          </div>
        );
      },
    },
  ];

  /*   const actionsHeader = [
    {
      title: "Actions",
      index: null,
      render: (data) => {
        return (
          <div className={classes["action-buttons"]}>
            <MyButton
              text={"Edit"}
              onClick={() => onEditTask(data)}
              bgColor="blue"
            />
            <MyButton
              text={"Delete"}
              onClick={() => onDeleteTask(data)}
              bgColor="red"
            />
          </div>
        );
      },
    },
  ]; */

  const showAllTasks = () => {
    setTasks(allTasksCopy);
  };

  const showDeletedTasks = () => {
    if (deletedTasks.length < 1) {
      setDeletedTasks([{ title: "/", status: "/" }]);
    }
    setTasks(deletedTasks);
  };

  const selectTabs = (e) => {
    setTasks(allTasksCopy.filter((item) => item.status === e));
  };

  return (
    <div>
      {isFormEditOpen && (
        <MyEditForm
          taskIndex={taskIndex}
          tasks={tasks}
          setTasks={setTasks}
          editableTask={editableTask}
          setEditableTask={setEditableTask}
          setIsFormEditOpen={setIsFormEditOpen}
        />
      )}
      {isFormNewOpen && (
        <NewTask
          tasks={tasks}
          setTasks={setTasks}
          setIsFormNewOpen={setIsFormNewOpen}
        />
      )}

      <div className={classes["buttons"]}>
        <MyButton text="All tasks" onClick={(e) => showAllTasks(e)} />
        {statuses.map((item) => (
          <MyButton key={item} text={item} onClick={() => selectTabs(item)} />
        ))}

        <MyButton text="Deleted" onClick={() => showDeletedTasks()} />
        <MyButton
          text=" Add new task"
          bgColor="blue"
          onClick={() => setIsFormNewOpen(true)}
        />
      </div>

      <Table header={headers} data={tasks} />
    </div>
  );
};

export default TaskMenagment;

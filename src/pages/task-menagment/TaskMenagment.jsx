import React, { useEffect, useState } from "react";
import NewTask from "../../components/new-task/NewTask";
import classes from "./task-managment.module.scss";
import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import { statuses } from "../../constants/statuses";
import Table from "../../components/table/Table";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [allTasksCopy, setAllTasksCopy] = useState(tasks);
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [isFormNewOpen, setIsFormNewOpen] = useState(false);
  const [deletedTasks, setDeletedTasks] = useState([]);

  useEffect(() => {
    setAllTasksCopy(tasks);
  }, [tasks]);

  const onEditTask = (task) => {
    setEditableTask(task);
    setTaskIndex(tasks.indexOf(task));
    setIsFormEditOpen(true);
  };
  const onDeleteTask = (task) => {
    console.log(tasks);
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
    <div>
      {isFormEditOpen && (
        <Form
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
        <Button text="All tasks" onClick={(e) => showAllTasks(e)} />
        {statuses.map((item) => (
          <Button key={item} text={item} onClick={() => selectTabs(item)} />
        ))}

        <Button text="Deleted" onClick={() => showDeletedTasks()} />
        <Button
          text=" Add new task"
          bgColor="blue"
          onClick={() => setIsFormNewOpen(true)}
        />
      </div>

      <Table header={headers} data={allTasksCopy} />
    </div>
  );
};

export default TaskMenagment;

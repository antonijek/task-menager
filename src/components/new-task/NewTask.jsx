import React, { useState } from "react";
import { useTaskData } from "../../context/TaskContext";
import Form from "../form/Form";

const NewTask = () => {
  const { tasks, setTasks, setIsFormNewOpen } = useTaskData();
  const [newTask, setNewTask] = useState();

  const onChangeTask = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, key: `task-${tasks.length}`, [name]: value });
  };

  const addNewTask = () => {
    setTasks({ type: "add-task", data: newTask });
    setIsFormNewOpen(false);
  };
  console.log(newTask);
  return (
    <Form
      closeForm={setIsFormNewOpen}
      title="Add new task"
      task={newTask}
      onChange={onChangeTask}
      onClick={addNewTask}
      text="Add"
    />
  );
};

export default NewTask;

import React, { useState } from "react";
import Form from "../form/Form";

const NewTask = ({ tasks, setTasks, setIsFormNewOpen }) => {
  const [newTask, setNewTask] = useState();

  const onChangeTask = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addNewTask = () => {
    setTasks({ type: "add-task", data: newTask });
    setIsFormNewOpen(false);
  };

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

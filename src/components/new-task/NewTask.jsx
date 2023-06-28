import React, { useState } from "react";
import classes from "../my-form/my-form.module.scss";
import style from "../../components/my-input/my-input.module.scss";
import MyInput from "../my-input/MyInput";

const NewTask = ({ tasks, setTasks, setIsFormNewOpen }) => {
  const [newTask, setNewTask] = useState();
  let statuses = ["Wish List", "To-Do List", "In-Progress List", "Done List"];

  const onChangeTask = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setIsFormNewOpen(false);
  };

  console.log(tasks);
  return (
    <form action="" className={classes["my-form"]}>
      <h2 className={classes["title"]}>Add new task</h2>

      <MyInput
        label="Title"
        className={style["my-input"]}
        value={newTask?.title}
        name="title"
        onChange={(e) => onChangeTask(e)}
      />
      <label className={classes["label-description"]} htmlFor="">
        Description
      </label>
      <textarea
        className={style["my-input"]}
        value={newTask?.description}
        name="description"
        onChange={(e) => onChangeTask(e)}
      />
      <select
        name="status"
        id=""
        className={classes["select"]}
        onChange={(e) => onChangeTask(e)}
      >
        <option>Select</option>
        {statuses.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>

      <button className={style["my-input"]} onClick={(e) => addNewTask(e)}>
        Add
      </button>
    </form>
  );
};

export default NewTask;

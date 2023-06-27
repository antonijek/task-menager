import React, { useEffect, useState } from "react";
import MyInput from "../my-input/MyInput";
import classes from "./my-form.module.scss";
import style from "../../components/my-input/my-input.module.scss";
import { allTasks } from "../../my-constants/myTasks";

const MyForm = ({
  taskIndex,
  editableTask,
  setEditableTask,
  tasks,
  setTasks,
}) => {
  const editTask = (e) => {
    const { name, value } = e.target;
    setEditableTask({ ...editableTask, [name]: value });
  };

  const edit = (e) => {
    e.preventDefault();

    let orderedTasks = tasks
      .slice(0, taskIndex)
      .concat(editableTask)
      .concat(tasks.slice(taskIndex + 1));
    setTasks(orderedTasks);
  };

  return (
    <form action="" className={classes["my-form"]}>
      <h2>Add new task</h2>

      <MyInput
        label="Title"
        className={style["my-input"]}
        value={editableTask?.title}
        name="title"
        onChange={(e) => editTask(e)}
      />
      <textarea
        label="Description"
        className={style["my-input"]}
        value={editableTask?.description}
        name="description"
        onChange={editTask}
      />
      <select
        name="status"
        id=""
        className={classes["select"]}
        onChange={editTask}
      >
        <option name="status" value={editableTask?.status}>
          {editableTask?.status}
        </option>
        {tasks
          .filter((item) => item.listName !== editableTask?.status)
          .map((el, index) => (
            <option key={index} value={el.status}>
              {el.status}
            </option>
          ))}
      </select>
      <button onClick={(e) => edit(e)}>Edit</button>
    </form>
  );
};

export default MyForm;

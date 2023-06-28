import React, { useEffect, useState } from "react";
import MyInput from "../my-input/MyInput";
import classes from "./my-form.module.scss";
import style from "../../components/my-input/my-input.module.scss";
import { allTasks } from "../../my-constants/myTasks";
import { statuses } from "../../my-constants/statuses";

const MyEditForm = ({
  taskIndex,
  editableTask,
  setEditableTask,
  tasks,
  setTasks,
  setIsFormEditOpen,
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
    setIsFormEditOpen(false);
  };

  return (
    <form action="" className={classes["my-form"]}>
      <h2 className={classes["title"]}>Edit task</h2>

      <MyInput
        label="Title"
        className={style["my-input"]}
        value={editableTask?.title}
        name="title"
        onChange={(e) => editTask(e)}
      />
      <label className={classes["label-description"]} htmlFor="">
        Description
      </label>
      <textarea
        className={style["my-input"]}
        value={editableTask?.description}
        name="description"
        onChange={editTask}
        rows="4"
      />
      <select
        name="status"
        id=""
        className={classes["select"]}
        onChange={editTask}
      >
        <option value={editableTask?.status}>{editableTask?.status}</option>
        {statuses.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>

      <button className={style["my-input"]} onClick={(e) => edit(e)}>
        Edit
      </button>
    </form>
  );
};

export default MyEditForm;

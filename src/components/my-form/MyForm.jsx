import React, { useEffect, useState } from "react";
import MyInput from "../my-input/MyInput";
import classes from "./my-form.module.scss";
import style from "../../components/my-input/my-input.module.scss";
import { allTasks } from "../../my-constants/myTasks";

const MyForm = ({
  taskIndex,
  editableTask,
  setEditableTask,
  editableList,
  setEditableList,
  tasks,
  setTasks,
}) => {
  const editTask = (e) => {
    const { name, value } = e.target;
    setEditableTask({ ...editableTask, [name]: value });
  };

  const edit = (e) => {
    e.preventDefault();
    let copyList = editableList;
    let onlyTasks = copyList.tasks;
    let orderedTasks = onlyTasks
      .slice(0, taskIndex)
      .concat(editableTask)
      .concat(onlyTasks.slice(taskIndex));
    copyList.tasks = orderedTasks;
    setEditableList(copyList);

    let choosenTask = tasks.filter(
      (item) => item.listName === editableList.listName
    );
    let taskObject = choosenTask[0];
    let index = tasks.indexOf(taskObject);
    let copy = [...tasks];
    copy[index] = editableList;
    setTasks(copy);
  };
  console.log(editableTask);
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
      <MyInput
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
        <option name="status" value={editableList?.listName}>
          {editableList?.listName}
        </option>
        {tasks
          .filter((item) => item.listName !== editableList?.listName)
          .map((el) => (
            <option key={el.listName} value={el.listName}>
              {el.listName}
            </option>
          ))}
      </select>
      <button onClick={(e) => edit(e)}>Edit</button>
    </form>
  );
};

export default MyForm;

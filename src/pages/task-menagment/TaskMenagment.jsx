import React, { useState } from "react";

import classes from "./task-managment.module.scss";
import MyForm from "../../components/my-form/MyForm";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [editableTask, setEditableTask] = useState();
  const [taskIndex, setTaskIndex] = useState();

  const onEditTask = (task) => {
    setEditableTask(task);
    setTaskIndex(tasks.indexOf(task));
  };

  return (
    <div>
      <MyForm
        taskIndex={taskIndex}
        tasks={tasks}
        setTasks={setTasks}
        editableTask={editableTask}
        setEditableTask={setEditableTask}
      />
      <div className={classes["buttons"]}>
        <button>All tasks</button>
        <button>Wish list</button>
        <button>To do</button>
        <button>In preogress</button>
        <button>Done</button>
        <button>Deleted</button>
        <button className={classes["buttons__new-task"]}>Add new task</button>
      </div>
      <table className={classes["my-table"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.title}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className={`${classes.btn} ${classes.edit}`}
                  onClick={() => onEditTask(task)}
                >
                  Edit
                </button>
                <button
                  className={`${classes.btn} ${classes.delete}`}
                  onClick={() => onDeleteTask(task)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskMenagment;

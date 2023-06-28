import React, { useState } from "react";
import NewTask from "../../components/new-task/NewTask";
import classes from "./task-managment.module.scss";
import MyEditForm from "../../components/my-form/MyEditForm";
import MyButton from "../../components/my-button/MyButton";
import { statuses } from "../../my-constants/statuses";

const TaskMenagment = ({ tasks, setTasks }) => {
  const [selectedTabs, setSelectedTabs] = useState(tasks);
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

  const showDeletedTasks = () => [setTasks(deletedTasks)];

  const selectTabs = (e) => {
    setTasks(selectedTabs.filter((item) => item.status === e));
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
        <MyButton text="All tasks" onClick={(e) => selectTabs(e)} />
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
            <tr key={task?.title}>
              <td>{task?.title}</td>
              <td>{task?.status}</td>
              <td>
                <MyButton
                  text="Edit"
                  bgColor="blue"
                  onClick={() => onEditTask(task)}
                />

                <MyButton
                  text="Delete"
                  bgColor="red"
                  onClick={() => onDeleteTask(task)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskMenagment;

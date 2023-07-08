import React, { useEffect, useState } from "react";
import Form from "../form/Form";

const EditTask = ({
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

  const edit = () => {
    setTasks({ type: "edit-task", index: taskIndex, data: editableTask });
    setIsFormEditOpen(false);
  };

  return (
    <div>
      <Form
        closeForm={setIsFormEditOpen}
        title="Edit task"
        task={editableTask}
        onChange={editTask}
        onClick={edit}
        text="Edit"
      />
    </div>
  );
};

export default EditTask;

import { useEffect, useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import { allTasks } from "./constants/myTasks";
import "./App.css";
import ModalProvider from "./context/ModalContext";
import Form from "./components/form/Form";
import Login from "./pages/login/Login";
import UserProvider from "./context/UserContext";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "delete-task": {
      return state.filter((item) => item !== action.data);
    }

    case "edit-task": {
      const updatedTasks = state.map((task) => {
        if (task.key === action.data.key) {
          return action.data;
        }
        return task;
      });

      return updatedTasks;
    }

    case "add-task": {
      return [...state, action.data];
    }

    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, allTasks);
  const [taskId, setTaskId] = useState();
  const [selectedTask, setSelectedTask] = useState();
  const [newTask, setNewTask] = useState();

  useEffect(() => {
    setSelectedTask(tasks.find((task) => task.key === taskId));
  }, [taskId]);

  const editTask = (e) => {
    const { name, value } = e.target;
    setSelectedTask({ ...selectedTask, [name]: value });
  };

  const edit = () => {
    dispatch({ type: "edit-task", data: selectedTask });
  };

  const onChangeTask = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, key: `task-${tasks.length}`, [name]: value });
  };

  const addNewTask = () => {
    dispatch({ type: "add-task", data: newTask });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home tasks={tasks} />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/task-menagment",
      element: <TaskMenagment tasks={tasks} setTasks={dispatch} />,
    },
    {
      path: "/new-task",
      element: (
        <Form
          title="Add new task"
          text="Add"
          onChange={onChangeTask}
          onClick={addNewTask}
        />
      ),
    },

    {
      path: "/task-menagment/:taskId",
      element: (
        <Form
          tasks={tasks}
          title="Edit task"
          text="Edit"
          onChange={editTask}
          onClick={edit}
          selectedTask={selectedTask}
          setTaskId={setTaskId}
        />
      ),
    },
  ]);

  return (
    <UserProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>{" "}
    </UserProvider>
  );
}

export default App;

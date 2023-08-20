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
import Register from "./pages/register/Register";
import MyProfile from "./pages/myProfile/MyProfile";
import Categories from "./pages/categories/Categories";
import Statuses from "./pages/statuses/Statuses";
import { getAllTasks } from "./services/taskServices";
import { tasksByStatuses } from "./services/taskServices";

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
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    setSelectedTask(tasks.find((task) => task.key === taskId));
  }, [taskId]);

  const getTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home tasks={Tasks} />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/my-profile",
      element: <MyProfile />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/categories",
      element: <Categories />,
    },

    {
      path: "/statuses",
      element: <Statuses />,
    },

    {
      path: "/task-menagment",
      element: <TaskMenagment tasks={Tasks} setTasks={setTasks} />,
    },
    {
      path: "/task-menagment/new-task",
      element: <Form setTasks={setTasks} />,
    },

    {
      path: "/task-menagment/:taskId",
      element: (
        <Form setTaskId={setTaskId} data={selectedTask} setTasks={dispatch} />
      ),
    },
  ]);

  return (
    <UserProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </UserProvider>
  );
}

export default App;

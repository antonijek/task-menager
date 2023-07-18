import { useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import { allTasks } from "./constants/myTasks";
import "./App.css";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "delete-task": {
      return state.filter((item) => item !== action.data);
    }

    case "edit-task": {
      return state
        .slice(0, action.index)
        .concat(action.data)
        .concat(state.slice(action.index + 1));
    }

    case "add-task": {
      return [...state, action.data];
    }

    default:
      return state;
  }
};

function App() {
  const [tab, setTab] = useState("home");
  const [tasks, dispatch] = useReducer(tasksReducer, allTasks);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home tasks={tasks} />,
    },
    {
      path: "/task-menagment",
      element: <TaskMenagment tasks={tasks} setTasks={dispatch} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

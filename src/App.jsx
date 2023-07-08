import { useReducer, useState } from "react";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import Navbar from "./components/navbar/Navbar";
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

  return (
    <div className="main-container">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "home" ? (
        <Home tasks={tasks} />
      ) : (
        <TaskMenagment tasks={tasks} setTasks={dispatch} />
      )}
    </div>
  );
}

export default App;

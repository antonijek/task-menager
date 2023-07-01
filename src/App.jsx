import { useState } from "react";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import Navbar from "./components/navbar/Navbar";
import { allTasks } from "./constants/myTasks";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");
  const [tasks, setTasks] = useState(allTasks);

  return (
    <div className="main-container">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "home" ? (
        <Home tasks={tasks} />
      ) : (
        <TaskMenagment tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
}

export default App;

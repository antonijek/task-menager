import { useState } from "react";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import MyNavbar from "./components/myNavbar/MyNavbar";
import { allTasks } from "../src/my-constants/myTasks";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");
  const [tasks, setTasks] = useState(allTasks);

  return (
    <div className="main-container">
      <MyNavbar tab={tab} setTab={setTab} />
      {tab === "home" ? (
        <Home tasks={tasks} setTasks={setTasks} />
      ) : (
        <TaskMenagment tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
}

export default App;

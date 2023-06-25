import { useState } from "react";
import Home from "./pages/home/Home";
import TaskMenagment from "./pages/task-menagment/TaskMenagment";
import MyNavbar from "./components/myNavbar/MyNavbar";

import "./App.css";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="main-container">
      <MyNavbar tab={tab} setTab={setTab} />
      {tab === "home" ? <Home /> : <TaskMenagment />}
    </div>
  );
}

export default App;

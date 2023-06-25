import React from "react";
import classes from "./my-navbar.module.scss";

const MyNavbar = ({ tab, setTab }) => {
  return (
    <nav className={classes["navbar"]}>
      <h2 className={classes["navbar__title"]}>Task Manager</h2>
      <button
        className={classes["navbar__tab"]}
        onClick={
          tab === "home" ? () => setTab("taskMenagment") : () => setTab("home")
        }
      >
        {tab === "home" ? "Task Menagment" : "Home"}
      </button>
    </nav>
  );
};

export default MyNavbar;

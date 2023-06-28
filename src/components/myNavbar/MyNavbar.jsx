import React from "react";
import classes from "./my-navbar.module.scss";
import MyButton from "../my-button/MyButton";

const MyNavbar = ({ tab, setTab }) => {
  return (
    <nav className={classes["navbar"]}>
      <h2 className={classes["navbar__title"]}>Task Manager</h2>
      <MyButton
        text={tab === "home" ? "Task Menagment" : "Home"}
        onClick={
          tab === "home" ? () => setTab("taskMenagment") : () => setTab("home")
        }
      />
    </nav>
  );
};

export default MyNavbar;

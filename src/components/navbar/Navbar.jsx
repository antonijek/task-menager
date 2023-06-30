import React from "react";
import classes from "./navbar.module.scss";
import Button from "../button/Button";

const Navbar = ({ tab, setTab }) => {
  return (
    <nav className={classes["navbar"]}>
      <h2 className={classes["navbar__title"]}>Task Manager</h2>
      <Button
        text={tab === "home" ? "Task Menagment" : "Home"}
        onClick={() => setTab(tab === "home" ? "taskMenagment" : "home")}
      />
    </nav>
  );
};

export default Navbar;

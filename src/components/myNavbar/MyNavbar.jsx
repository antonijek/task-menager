import React from "react";
import classes from "./my-navbar.module.scss";

const MyNavbar = ({ tab, setTab }) => {
  return (
    <nav className={classes["navbar"]}>
      <button
        className={classes["navbar__tab"]}
        onClick={
          tab === "home" ? () => setTab("taskMenagment") : () => setTab("home")
        }
      >
        {tab === "home" ? "taskMenagment" : "home"}
      </button>
    </nav>
  );
};

export default MyNavbar;

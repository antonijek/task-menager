import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../wrapperHOC/wrapper.module.scss";

const applyClass = ({ isActive }) => {
  return isActive
    ? `${classes["active"]} ${classes["pending"]}`
    : `${classes["pending"]}`;
};

const wrapperHOC = (Component) => {
  return (props) => {
    return (
      <div className="main-container">
        <nav className={classes["navbar"]}>
          <h2 className={classes["navbar__title"]}>Task Manager</h2>
          <div>
            <NavLink to="/" className={applyClass}>
              Home
            </NavLink>
            <NavLink to="/task-menagment" className={applyClass}>
              Task Menagment
            </NavLink>
          </div>
        </nav>
        <Component {...props} />
      </div>
    );
  };
};

export default wrapperHOC;

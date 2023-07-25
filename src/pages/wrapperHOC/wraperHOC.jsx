import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../wrapperHOC/wrapper.module.scss";
import { userData } from "../../context/UserContext";
import { Button } from "antd";

const applyClass = ({ isActive }) => {
  return isActive
    ? `${classes["active"]} ${classes["pending"]}`
    : `${classes["pending"]}`;
};

const wrapperHOC = (Component) => {
  return (props) => {
    const { user, logout } = userData();
    return (
      <div className="main-container">
        <nav className={classes["navbar"]}>
          <h2 className={classes["navbar__title"]}>Task Manager</h2>
          <h2 className={classes["avatar-name"]}>{user.name.split(" ")[0]}</h2>
          <div className={classes["tabs"]}>
            <NavLink to="/" className={applyClass}>
              Home
            </NavLink>
            <NavLink to="/task-menagment" className={applyClass}>
              Task Menagment
            </NavLink>
            <h4 className={classes["logout"]} onClick={() => logout()}>
              Logout
            </h4>
          </div>
        </nav>
        <Component {...props} />
      </div>
    );
  };
};

export default wrapperHOC;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../wrapperHOC/wrapper.module.scss";
import { userData } from "../../context/UserContext";

import DropdownTabs from "../../components/dropdown/Dropdown";

const applyClass = ({ isActive }) => {
  return isActive
    ? `${classes["active"]} ${classes["pending"]}`
    : `${classes["pending"]}`;
};

const wrapperHOC = (Component) => {
  return (props) => {
    const { user, logout } = userData();
    console.log(user);

    return (
      <div className="main-container">
        <nav className={classes["navbar"]}>
          <h2 className={classes["navbar__title"]}>Task Manager</h2>
          <h2 className={classes["avatar-name"]}>{user?.name}</h2>
          <NavLink to="/" className={applyClass}>
            Home
          </NavLink>
          <NavLink to="/add-task" className={applyClass}>
            Add Task
          </NavLink>
          <DropdownTabs />
          <NavLink to="/my-profile" className={applyClass}>
            My Profile
          </NavLink>
          <h4 className={classes["logout"]} onClick={() => logout()}>
            Logout
          </h4>
        </nav>
        <Component {...props} />
      </div>
    );
  };
};

export default wrapperHOC;

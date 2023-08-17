import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../wrapperHOC/wrapper.module.scss";
import { userData } from "../../context/UserContext";
import { Button } from "antd";

const applyClass = ({ isActive }) => {
  return isActive
    ? `${classes["active"]} ${classes["pending"]}`
    : `${classes["pending"]}`;
};

const DropdownTabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes["tabs"]}>
      <NavLink to="/" className={applyClass}>
        Home
      </NavLink>
      <NavLink to="/add-task" className={applyClass}>
        Add Task
      </NavLink>
      <div className={classes["dropdown"]}>
        <button className={classes["dropbtn"]} onClick={toggleDropdown}>
          Task Management
        </button>
        {isOpen && (
          <div className={classes["dropdown-content"]}>
            <NavLink to="/task-menagment" className={applyClass}>
              All Tasks
            </NavLink>
            <NavLink to="/completed-tasks" className={applyClass}>
              Completed Tasks
            </NavLink>
            <NavLink to="/pending-tasks" className={applyClass}>
              Pending Tasks
            </NavLink>
          </div>
        )}
      </div>
      <NavLink to="/my-profile" className={applyClass}>
        My Profile
      </NavLink>
    </div>
  );
};

const wrapperHOC = (Component) => {
  return (props) => {
    const { user, logout } = userData();
    return (
      <div className="main-container">
        <nav className={classes["navbar"]}>
          <h2 className={classes["navbar__title"]}>Task Manager</h2>
          <h2 className={classes["avatar-name"]}>{user?.firstName}</h2>
          <DropdownTabs />
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

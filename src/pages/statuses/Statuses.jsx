import React, { useState, useEffect } from "react";
import classes from "../../pages/task-menagment/task-managment.module.scss";
import wrapperHOC from "../wrapperHOC/wraperHOC";
import { useNavigate } from "react-router-dom";
import AuthHoc from "../authHOC/AuthHoc";
import { getAllStatuses } from "../../services/statusServices";
import Table from "../../components/table/Table"; // Your custom Table component

const Statuses = () => {
  const [statuses, setStatuses] = useState();

  const getStatuses = async () => {
    try {
      const res = await getAllStatuses();
      setStatuses(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStatuses();
  }, []);

  const navigate = useNavigate();

  const onEditTask = (data) => {};

  const onDeleteTask = (data) => {};

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Code", dataIndex: "code", key: "code" },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (data) => {
        return (
          <div className={classes["action-buttons"]}>
            <button
              className={classes["blue-button"]}
              onClick={() => onEditTask(data)}
            >
              Edit
            </button>

            <button
              className={classes["red-button"]}
              onClick={() => onDeleteTask(data)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={statuses} />
    </div>
  );
};

export default AuthHoc(wrapperHOC(Statuses));

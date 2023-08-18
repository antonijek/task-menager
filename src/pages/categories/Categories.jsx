import React, { useState, useEffect } from "react";
import classes from "../../pages/task-menagment/task-managment.module.scss";
import wrapperHOC from "../wrapperHOC/wraperHOC";
import { useNavigate } from "react-router-dom";
import AuthHoc from "../authHOC/AuthHoc";
import { getAllCategories } from "../../services/categoryServices";
import Table from "../../components/table/Table"; // Your custom Table component

const Categories = () => {
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    try {
      const res = await getAllCategories();
      setCategories(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const navigate = useNavigate();

  const onEditTask = (data) => {};

  const onDeleteTask = (data) => {};

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Color", dataIndex: "color", key: "color" },
    { title: "Created At", dataIndex: "created_at", key: "created_at" },
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

  const transformedCategories = categories
    ? categories.map((category) => ({
        ...category,
        key: category.id,
      }))
    : [];

  return (
    <div>
      <Table columns={columns} dataSource={transformedCategories} />
    </div>
  );
};

export default AuthHoc(wrapperHOC(Categories));

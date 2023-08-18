import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <Link to="/task-menagment" rel="noopener noreferrer">
        All tasks
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/statuses" rel="noopener noreferrer">
        Task status
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="/categories" rel="noopener noreferrer">
        Task category
      </Link>
    ),
  },
];
const DropdownTabs = () => {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Task Managment
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownTabs;

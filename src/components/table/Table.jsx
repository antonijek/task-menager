import { Table as AndTable } from "antd";

const Table = ({ columns, dataSource }) => {
  return <AndTable columns={columns} dataSource={dataSource} />;
};

export default Table;

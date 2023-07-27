import React from "react";
import { Input } from "antd";
const { TextArea: AntdTextArea } = Input;

const TextArea = ({
  label = "",
  className = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
  name = "",
  value = "",
  rows = "",
}) => {
  return (
    <AntdTextArea />
    /*  <div>
      <div>
        <label htmlFor="">{label}</label>
      </div>
      <textarea
        name={name}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        rows={rows}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div> */
  );
};

export default TextArea;

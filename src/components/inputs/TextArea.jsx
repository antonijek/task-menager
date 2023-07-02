// Input.jsx
import React from "react";

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
    <div>
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
    </div>
  );
};

export default TextArea;

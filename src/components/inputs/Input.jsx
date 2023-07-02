import React from "react";

const Input = ({
  label = "",
  className = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
  name = "",
  value = "",
}) => {
  return (
    <div>
      <div>
        <label htmlFor="">{label}</label>
      </div>
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({
  label = "",
  className = "",
  placeholder = "",
  type = "text",
  onChange,
  value = "",
  name = "",
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
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;

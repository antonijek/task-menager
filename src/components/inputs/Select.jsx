import React from "react";

const Select = ({
  arr = [],
  className = "",
  onChange = () => {},
  name = "",
  value = "",
  text = "",
}) => {
  return (
    <select
      name={name}
      className={className}
      onChange={(e) => {
        onChange(e);
      }}
    >
      <option value={value}>{text}</option>
      {arr.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default Select;

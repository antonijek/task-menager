import React from "react";

const InputSearch = ({
  label = "",
  className = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
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
        onChange={(e) => {
          onChange(e?.target?.value);
        }}
      />
    </div>
  );
};

export default InputSearch;

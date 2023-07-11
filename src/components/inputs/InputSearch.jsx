import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const InputSearch = ({
  label = "",
  className = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
  name = "",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue]);

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
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default InputSearch;

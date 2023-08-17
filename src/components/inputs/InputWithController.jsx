import React from "react";
import { Controller } from "react-hook-form";
//import classes from "./InputWithController.module.scss";

const InputWithController = ({
  label = "",
  placeholder = "",
  name,
  control,
  error,
  className,
  type = "text",
  onChange,
}) => {
  return (
    <div>
      {label && label?.length > 0 && <label>{label}</label>}
      {control && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
              onChange={(e) => {
                field.onChange(e); // React-hook-form's onChange
                if (onChange) {
                  onChange(e); // Custom onChange
                }
              }}
            />
          )}
        />
      )}
      {error && error?.length > 0 && <span>{error}</span>}
    </div>
  );
};

export default InputWithController;

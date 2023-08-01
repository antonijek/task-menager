import React from "react";
import { Controller } from "react-hook-form";
//import classes from "./InputWithController.module.scss";

const InputWithController = ({
  label = "",
  placeholder = "",
  name,
  control,
  error,
}) => {
  return (
    <div>
      {label && label?.length > 0 && <label>{label}</label>}
      {control && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input type="text" placeholder={placeholder} {...field} />
          )}
        />
      )}
      {error && error?.length > 0 && <span>{error}</span>}
    </div>
  );
};

export default InputWithController;

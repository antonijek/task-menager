import React from "react";
//import classes from "./TextareaWithController.module.scss";
import { Controller } from "react-hook-form";

const TextareaWithController = ({
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
            <textarea placeholder={placeholder} rows="4" cols="50" {...field} />
          )}
        />
      )}
      {error && error?.length > 0 && <span>{error}</span>}
    </div>
  );
};

export default TextareaWithController;

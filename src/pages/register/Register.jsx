import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../../components/inputs/InputWithController";
import TextAreaWithController from "../../components/inputs/TextAreaWithController";
import { useParams, useNavigate } from "react-router-dom";
import classes from "../../components/form/form.module.scss";
import style from "../../components/inputs/input.module.scss";
import { statuses } from "../../constants/statuses";
import SubmitButton from "../../components/button/SubmitButton";
import SelectWithController from "../../components/inputs/SelectWithController";
import ImageUploadWithController from "../../components/uploadFile/UploadFile";
import { register } from "../../services/authServices";
import UploadFile from "../../components/uploadFile/UploadFile";

const Register = ({ data, setTaskId, setTasks, taskKey }) => {
  const [formData, setFormData] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  console.log(file);

  const schema = yup.object({
    name: yup
      .string()
      .required("Field is required!")
      .min(2, "Field cannot be less than 2 characters long!")
      .max(50, "Field cannot be more than 50 characters long!"),
    surname: yup
      .string()
      .required("Field is required!")
      .min(2, "Field cannot be less than 2 characters long!")
      .max(50, "Field cannot be more than 50 characters long!"),
    email: yup
      .string()
      .required("Field is required!")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Field is required!")
      .min(8, "Password must be at least 8 characters long")
      .max(16, "Password cannot be more than 16 characters long"),
    confirmPassword: yup
      .string()
      .required("Field is required!")
      .min(8, "Password must be at least 8 characters long")
      .oneOf([yup.ref("password"), null], "Passwords must match"), // Compare with "password"
    description: yup
      .string()
      .max(255, "Field cannot be more than 255 characters long!")
      .min(10, "Description must be at least 10 characters long"),
    image: yup.string().required("Field is required!"),
  });

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onClose = (e) => {
    e.preventDefault();
    navigate("/task-menagment");
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("description", data.description);
    formData.append("image", file); // Appending the selected file

    try {
      const res = await register(formData); // Assuming your register function handles the FormData
      console.log(res); // Handle the response as needed
      //navigate("/task-menagment"); // Navigating after successful registration
    } catch (error) {
      console.error("Error registering:", error);
      // Handle error state or show error message to the user
    }
  };
  console.log(file);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <form
        className={classes["my-form"]}
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h2 className={classes["title"]}>Register</h2>

        <InputWithController
          className={style["my-input"]}
          label="Name"
          name="name"
          control={control}
          error={errors?.name?.message}
        />
        <InputWithController
          className={style["my-input"]}
          label="Surname"
          name="surname"
          control={control}
          error={errors?.surname?.message}
        />
        <InputWithController
          className={style["my-input"]}
          label="Email"
          name="email"
          control={control}
          error={errors?.email?.message}
        />
        <InputWithController
          className={style["my-input"]}
          label="Password"
          name="password"
          control={control}
          error={errors?.password?.message}
        />
        <InputWithController
          className={style["my-input"]}
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          error={errors?.confirmPassword?.message}
        />

        <TextAreaWithController
          label="Description"
          name="description"
          control={control}
          error={errors?.description?.message}
          className={style["my-input"]}
        />
        <InputWithController
          label="Select file"
          name="image"
          type="file"
          control={control}
          onChange={handleFile}
        />

        <SubmitButton label="Submit" className={style["my-input"]} />
        <button className={classes["close"]} onClick={(e) => onClose(e)}>
          x
        </button>
      </form>
    </div>
  );
};

export default Register;

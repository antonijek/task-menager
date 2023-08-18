import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../../components/inputs/InputWithController";
import TextAreaWithController from "../../components/inputs/TextAreaWithController";
import { useNavigate } from "react-router-dom";
import classes from "../../components/form/form.module.scss";
import style from "../../components/inputs/input.module.scss";
import SubmitButton from "../../components/button/SubmitButton";
import { register } from "../../services/authServices";
import { userData } from "../../context/UserContext";
import { editUser } from "../../services/userServices";

const MyProfile = () => {
  const [file, setFile] = useState(null);
  const { user } = userData();

  const navigate = useNavigate();

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

    description: yup
      .string()
      .max(255, "Field cannot be more than 255 characters long!")
      .min(10, "Description must be at least 10 characters long"),
    image: yup.string().required("Field is required!"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      surname: user.surname,
      description: user.description,
      image: user.image,
      email: user.email,
    },
  });

  const onClose = (e) => {
    e.preventDefault();
    // navigate("/");
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("description", data.description);
    formData.append("image", file);

    try {
      await editUser(user, formData);
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error);
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
        <h2 className={classes["title"]}>Edit</h2>

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
          disabled
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

export default MyProfile;

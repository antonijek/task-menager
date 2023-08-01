//import Input from "../inputs/Input";
import { useEffect } from "react";
import classes from "./form.module.scss";
import style from "../inputs/input.module.scss";
import { statuses } from "../../constants/statuses";
//import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
//import Button from "../button/Button";
import { Input, Button } from "antd";
const { TextArea } = Input;
import Label from "../Label";
import { useParams, useNavigate } from "react-router-dom";

const Form = ({
  title,
  text,
  onChange,
  onClick,
  selectedTask,
  setTaskId = () => {},
}) => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    setTaskId(taskId);
  }, [taskId]);

  const onClose = () => {
    navigate("/task-menagment");
  };

  return (
    <form action="" className={classes["my-form"]}>
      <Button className={classes["close"]} onClick={(e) => onClose(e)}>
        X
      </Button>
      <h2 className={classes["title"]}>{title}</h2>
      <Label title="Title" />
      <Input
        className={style["my-input"]}
        value={selectedTask?.title}
        name="title"
        onChange={(e) => onChange(e)}
      />
      <Label title="Description" />
      <TextArea
        className={style["my-input"]}
        value={selectedTask?.description}
        name="description"
        onChange={(e) => onChange(e)}
        rows="4"
      />
      <Select
        name="status"
        className={classes["select"]}
        onChange={(e) => onChange(e)}
        value={selectedTask?.status}
        text={selectedTask?.status}
        arr={statuses}
      />

      <Button
        className={style["my-input"]}
        onClick={(e) => {
          onClick(e);
          navigate("/task-menagment");
        }}
      >
        {text}
      </Button>
    </form>
  );
};

export default Form;

/* import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../inputs/InputWithController";

const ValidationTestThree = () => {
  const schema = yup.object({
    description: yup
      .string()
      .required("Field is required!")
      .min(2, "Field cannot be less than 2 characters long!")
      .max(3, "Field cannot be more than 3 characters long!")
      .matches(/abc/, "Field invalid!"),
  });

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Title",
      description: "abc",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  const logErrors = () => console.log(errors);

  return (
    <div
      style={{ paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <InputWithController
          label="title"
          name="title"
          //placeholder="tit"
          control={control}
          error={errors?.title?.message}
        />
        <InputWithController
          label="des"
          name="description"
          placeholder="des"
          control={control}
          error={errors?.description?.message}
        />

        <input {...register("description")} />
        {errors?.description && <span>{errors?.description?.message}</span>}
        <div>Value of second field is: {watch("description")}</div>
        <button onClick={() => logErrors()}>Log errors</button>
        <button onClick={() => setValue("title", "Example set!")}>
          Set value of first field to "Example set!"
        </button>
        <button onClick={() => reset()}>Reset form to default values</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidationTestThree;
 */

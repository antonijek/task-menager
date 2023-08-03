/* //import Input from "../inputs/Input";
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
  console.log(selectedTask);
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

export default Form; */

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../inputs/InputWithController";
import TextAreaWithController from "../inputs/TextAreaWithController";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./form.module.scss";
import style from "../inputs/input.module.scss";
import { statuses } from "../../constants/statuses";
import SubmitButton from "../button/SubmitButton";
import SelectWithController from "../inputs/SelectWithController";

const Form = ({ data, setTaskId, setTasks, taskKey }) => {
  const schema = yup.object({
    title: yup
      .string()
      .required("Field is required!")
      .min(2, "Field cannot be less than 2 characters long!")
      .max(20, "Field cannot be more than 20 characters long!"),
    description: yup
      .string()
      .required("Field is required!")
      .min(2, "Field cannot be less than 2 characters long!")
      .max(100, "Field cannot be more than 100 characters long!"),
    status: yup.string().required("Field is required!"),
  });

  const { taskId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTaskId(taskId);
  }, [taskId]);

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      key: data?.key,
      title: data?.title || "",
      description: data?.description,
      status: data?.status,
    },
  });

  useEffect(() => {
    if (data?.title) {
      setValue("key", data.key);
      setValue("title", data.title);
      setValue("description", data.description);
      setValue("status", data.status);
    }
  }, [data]);

  const onClose = (e) => {
    e.preventDefault();
    navigate("/task-menagment");
  };

  const onSubmit = (data) => {
    data.key
      ? setTasks({ type: "edit-task", data: data })
      : setTasks({
          type: "add-task",
          data: { ...data, key: `task-${taskKey}` },
        });
    navigate("/task-menagment");
  };

  return (
    <div>
      <form
        className={classes["my-form"]}
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h2 className={classes["title"]}>
          {data?.key ? "Edit task" : "Add task"}
        </h2>

        <InputWithController
          className={style["my-input"]}
          label="Title"
          name="title"
          control={control}
          error={errors?.title?.message}
        />
        <TextAreaWithController
          label="Description"
          name="description"
          control={control}
          error={errors?.description?.message}
          className={style["my-input"]}
        />
        <SelectWithController
          label="Select an option"
          options={statuses}
          name="status"
          control={control}
          error={errors?.status?.message}
          className={style["my-input"]}
        />

        <SubmitButton label="Submit" className={style["my-input"]} />
        <button className={classes["close"]} onClick={(e) => onClose(e)}>
          x
        </button>
      </form>
    </div>
  );
};

export default Form;

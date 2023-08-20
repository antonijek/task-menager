import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../inputs/InputWithController";
import TextAreaWithController from "../inputs/TextAreaWithController";
import { useParams } from "react-router-dom";
import classes from "./form.module.scss";
import style from "../inputs/input.module.scss";
import SubmitButton from "../button/SubmitButton";
import SelectWithController from "../inputs/SelectWithController";
import { addNewTask } from "../../services/taskServices";
import { getAllStatuses } from "../../services/statusServices";
import { getAllCategories } from "../../services/categoryServices";
import { getAllTasks } from "../../services/taskServices";
import { useModal } from "../../context/ModalContext";
import { editTask } from "../../services/taskServices";

const Form = ({ data, setTasks, setSpiner }) => {
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);

  const modal = useModal();

  const schema = yup.object({
    name: yup
      .string()
      .required("Field is required!")
      .min(3, "Field cannot be less than 3 characters long!")
      .max(20, "Field cannot be more than 20 characters long!"),
    description: yup
      .string()
      .required("Field is required!")
      .min(3, "Field cannot be less than 3 characters long!")
      .max(100, "Field cannot be more than 100 characters long!"),
    status: yup.string(),
    category: yup.string(),
  });

  const { taskId } = useParams();

  const getStatusesAndCategories = async () => {
    try {
      const statuses = await getAllStatuses();
      const categories = await getAllCategories();

      setStatuses(
        statuses.map((status) => ({ label: status.name, value: status.id }))
      );
      setCategories(
        categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStatusesAndCategories();
  }, []);

  const {
    reset,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      key: data?.key,
      name: data?.name || "",
      description: data?.description || "",
      status_id: data?.status_id,
      category_id: data?.category_id,
    },
  });

  useEffect(() => {
    reset();
    if (data?.name) {
      setValue("key", data.key);
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("status_id", data.status_id);
      setValue("category_id", data.category_id);
    }
  }, [data]);

  const addNew = async (data) => {
    modal.setSpiner(true);
    try {
      const res = await addNewTask(data);
      const tasks = await getAllTasks();
      setTasks(tasks);
      modal.close();
      modal.setSpiner(false);
    } catch (err) {
      console.log(err);
      modal.setSpiner(false);
    }
  };

  const edit = async (data, id) => {
    setSpiner(true);
    try {
      const res = await editTask(data, id);
      const tasks = await getAllTasks();
      setTasks(tasks);
      modal.close();
      setSpiner(false);
    } catch (err) {
      console.log(err);
      setSpiner(false);
    }
  };

  const onSubmit = (formData) => {
    const { status, category, ...rest } = formData;
    data?.name ? edit(formData, data.id) : addNew(rest);
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
          label="Name"
          name="name"
          control={control}
          error={errors?.name?.message}
        />
        <TextAreaWithController
          label="Description"
          name="description"
          control={control}
          error={errors?.description?.message}
          className={style["my-input"]}
        />
        <SelectWithController
          label="Select status"
          options={statuses}
          name="status_id"
          control={control}
          error={errors?.status?.message}
          className={style["my-input"]}
        />
        <SelectWithController
          label="Select category"
          options={categories}
          name="category_id"
          control={control}
          error={errors?.category?.message}
          className={style["my-input"]}
        />

        <SubmitButton label="Submit" className={style["my-input"]} />
      </form>
    </div>
  );
};

export default Form;

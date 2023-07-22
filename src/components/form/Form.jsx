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

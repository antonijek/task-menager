import Input from "../inputs/Input";
import classes from "./form.module.scss";
import style from "../inputs/input.module.scss";
import { statuses } from "../../constants/statuses";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import Button from "../button/Button";

const Test = ({ title, task, onChange, onClick, text, closeForm }) => {
  const onClose = (e) => {
    e.preventDefault();
    closeForm(false);
  };

  return (
    <form action="" className={classes["my-form"]}>
      <button className={classes["close"]} onClick={(e) => onClose(e)}>
        x
      </button>
      <h2 className={classes["title"]}>{title}</h2>

      <Input
        label="Title"
        className={style["my-input"]}
        value={task?.title}
        name="title"
        onChange={(e) => onChange(e)}
      />
      <label className={classes["label-description"]} htmlFor="">
        Description
      </label>
      <TextArea
        className={style["my-input"]}
        value={task?.description}
        name="description"
        onChange={(e) => onChange(e)}
        rows="4"
      />
      <Select
        name="status"
        className={classes["select"]}
        onChange={(e) => onChange(e)}
        value={task?.status}
        text={task?.status}
        arr={statuses}
      />

      <Button
        text={text}
        className={style["my-input"]}
        onClick={(e) => onClick(e)}
      />
    </form>
  );
};

export default Test;

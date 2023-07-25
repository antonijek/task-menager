import React from "react";
import { useState } from "react";
import { Input, Button } from "antd";
import classes from "../../components/inputs/input.module.scss";
import style from "../../components/form/form.module.scss";
import Label from "../../components/Label";
import { userData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState();
  const { login } = userData();
  const navigate = useNavigate();

  const onLogin = () => {
    const success = login(formData?.email, formData?.password);

    if (success) {
      navigate("/");
    }
  };

  const changeData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={style["container"]}>
      <div className={style["my-form"]}>
        <h1 className={style["login-title"]}>Login</h1>
        <Label title="Email" />
        <Input
          className={classes["my-input"]}
          value={formData?.email}
          name="email"
          onChange={(e) => changeData(e)}
        />
        <Label title="Password" />
        <Input
          className={classes["my-input"]}
          value={formData?.password}
          name="password"
          onChange={(e) => changeData(e)}
        />
        <div className={style["btn-submit"]}>
          <Button className={classes["my-input"]} onClick={onLogin}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

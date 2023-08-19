import React from "react";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import SubmitButton from "../../components/button/SubmitButton";
import classes from "../../components/inputs/input.module.scss";
import style from "../../components/form/form.module.scss";
import Label from "../../components/Label";
import { userData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";

import { get, set } from "../../services/storageServices";
import { storageKeys } from "../../config/config";

const Login = () => {
  const [formData, setFormData] = useState();
  const { getUser, logout, user } = userData();
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      const res = await login(formData?.email, formData?.password);
      set(storageKeys.USER, res.access_token);
      await getUser();
      navigate("/");
      return res;
    } catch (err) {
      console.log(err?.data);
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
          <SubmitButton
            className={classes["my-input"]}
            onClick={onLogin}
            label="  Submit"
          />
        </div>
        <div>
          <p>You dont have acount?</p>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

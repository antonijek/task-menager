import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { loginModel } from "./models/authModels";

export const login = async (email, password) => {
  try {
    const res = await requestInstance.post("/login", {
      email,
      password,
    });
    const response = loginModel(res.data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

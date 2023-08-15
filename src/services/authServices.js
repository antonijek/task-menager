import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { loginModel } from "./models/authModels";

const api = "/login";

export const login = async (email, password) => {
  try {
    const res = await requestInstance.post(api, {
      email,
      password,
    });
    const response = loginModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};

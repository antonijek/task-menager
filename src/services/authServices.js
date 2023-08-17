import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { loginModel, registerModel } from "./models/authModels";

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
export const register = async (data) => {
  try {
    const res = await requestInstance.post("/register", data);
    const response = registerModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};

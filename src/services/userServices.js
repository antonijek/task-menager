import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { loginModel } from "./models/userModels";

const api = "/user";

export const getCurrentUser = async () => {
  try {
    const res = await requestInstance.get(api);
    return loginModel(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

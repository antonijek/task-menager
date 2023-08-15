import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { loginModel } from "./models/userModels";

export const getCurrentUser = async () => {
  try {
    const res = await requestInstance.get("/user");
    return loginModel(res.data);
  } catch (err) {
    console.log(err);
  }
};

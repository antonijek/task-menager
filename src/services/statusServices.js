import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { getAllStatusesModel } from "./models/statusModels";

const api = "/statuses";

export const getAllStatuses = async () => {
  try {
    const res = await requestInstance.get(api);
    const statuses = getAllStatusesModel(res.data);
    return statuses;
  } catch (err) {
    Promise.reject(err);
  }
};

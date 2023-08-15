import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { getAllTasksModel } from "./models/taskModels";

const api = "/tasks";

export const getAllTasks = async () => {
  try {
    const res = await requestInstance.get(api);
    const tasks = getAllTasksModel(res.data);
    return tasks;
  } catch (err) {
    Promise.reject(err);
  }
};

/* export const addNewTask = (title, description) => {
  return axios.post(`${baseUrl}/task-menagment/new-task`, {
    title,
    description,
  });
}; */

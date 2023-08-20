import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { deleteTaskModel } from "./models/taskModels";
import {
  getAllTasksModel,
  addNewTaskModel,
  tasksByStatusesModel,
  editTaskModel,
} from "./models/taskModels";

const allTasksApi = "/tasks";
const tasksByStatusesApi = "/tasks-by-statuses";

export const getAllTasks = async () => {
  try {
    const res = await requestInstance.get(allTasksApi);
    const tasks = getAllTasksModel(res.data);

    return tasks;
  } catch (err) {
    Promise.reject(err);
  }
};

export const addNewTask = async (data) => {
  try {
    const res = await requestInstance.post(allTasksApi, data);
    const response = addNewTaskModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};
export const tasksByStatuses = async () => {
  try {
    const res = await requestInstance.get(tasksByStatusesApi);
    const response = tasksByStatusesModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};
export const editTask = async (data, id) => {
  try {
    const res = await requestInstance.put(`${allTasksApi}/${id}`, data);
    const response = editTaskModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};
export const deleteTask = async (id) => {
  try {
    const res = await requestInstance.delete(`${allTasksApi}/${id}`);
    const response = deleteTaskModel(res.data);
    return response;
  } catch (err) {
    Promise.reject(err);
  }
};

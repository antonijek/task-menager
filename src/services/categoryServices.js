import axios from "axios";
import { requestInstance } from "../config/requestInstance";
import { getAllCategoryModel } from "./models/categoryModels";

const api = "/categories";

export const getAllCategories = async () => {
  try {
    const res = await requestInstance.get(api);
    const categories = getAllCategoryModel(res.data);
    return categories;
  } catch (err) {
    Promise.reject(err);
  }
};

import { createContext, useContext } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children, data }) => {
  return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>;
};

export const useTaskData = () => {
  return useContext(TaskContext);
};

export default TaskProvider;

import { createContext, useContext, useState, useEffect } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskApi,
} from "../api/taskApi";

const TaskContext = createContext();

export function TaskProvider({ children }) {

const [tasks, setTasks] = useState([]);
useEffect(() => {
  loadTasks();
}, []);

const loadTasks = async () => {
  try {
    const response = await getTasks();
    setTasks(response.data);
  } catch (error) {
    console.error("Failed to load tasks:", error);
  }
};

const addTask = async (task) => {
  try {
    await createTask(task);

    // Reload tasks from the database
    loadTasks();

  } catch (error) {
    console.error("Failed to create task:", error);
  }
};
  // Delete Task
 const deleteTask = async (id) => {
  try {
    await deleteTaskApi(id);
    loadTasks();
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
};

  // Edit Task
const editTask = async (updatedTask) => {
  try {
    await updateTask(updatedTask.id, updatedTask);
    loadTasks();
  } catch (error) {
    console.error("Failed to update task:", error);
  }
};;

  // Complete Task
  const toggleTaskStatus = (id) => {

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );

  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        editTask,
        toggleTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
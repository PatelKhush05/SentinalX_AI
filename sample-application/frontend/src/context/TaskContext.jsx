import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "React Assignment",
      priority: "High",
      category: "Study",
      status: "Pending",
      dueDate: "2026-07-10",
      description: "Complete React project",
    },
    {
      id: 2,
      title: "DevOps Notes",
      priority: "Medium",
      category: "Work",
      status: "Completed",
      dueDate: "2026-07-08",
      description: "Revise Docker & Jenkins",
    },
    {
      id: 3,
      title: "AWS Revision",
      priority: "High",
      category: "Cloud",
      status: "Pending",
      dueDate: "2026-07-15",
      description: "Prepare for AWS exam",
    },
  ]);

  // Add Task
  const addTask = (task) => {

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...task,
        status: "Pending",
      },
    ]);

  };

  // Delete Task
  const deleteTask = (id) => {

    setTasks((prev) => prev.filter((task) => task.id !== id));

  };

  // Edit Task
  const editTask = (updatedTask) => {

    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

  };

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
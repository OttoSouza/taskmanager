import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTask] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTask([...tasks, { name, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const clear = () => {
    setTask([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (id, name) => {
    const newTask = tasks.map((task) => (task.id === id ? { name, id } : task));
    setTask(newTask);
    setEditItem(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clear,
        findItem,
        editTask,
        editItem,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;

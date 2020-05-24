import React, { useContext, useState, useEffect } from "react";
import "../../App.css";
// import { Container } from './styles';
import { TaskContext } from "../../context/Task";

function TaskForm() {
  const { addTask, clear, editTask, editItem } = useContext(TaskContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(name);
      setName("");
    } else {
      editTask(editItem.id, name);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    } else {
      setName("");
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        className="task-input"
        value={name}
        onChange={handleChange}
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={clear} className="btn clear-btn" type="button">
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

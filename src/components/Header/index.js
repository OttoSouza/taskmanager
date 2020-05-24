import React, { useContext } from "react";
import "../../App.css";
import { TaskContext } from "../../context/Task";
// import { Container } from './styles';

function Header() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="header">
      <h1>Task Manager {tasks.length}</h1>
    </div>
  );
}

export default Header;

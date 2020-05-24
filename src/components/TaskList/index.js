import React, { useContext } from "react";
import '../../App.css'
// import { Container } from './styles';
import { TaskContext } from "../../context/Task";

import TaskItem from "../TaskItem";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className='list'>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id}/>
      ))}
    </ul>
  );
}

export default TaskList;


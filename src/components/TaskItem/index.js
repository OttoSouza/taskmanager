import React, {useContext} from  "react";
import {TaskContext} from '../../context/Task'
// import { Container } from './styles';

function TaskItem({task}) {
  const {removeTask, findItem} = useContext(TaskContext)
  return (
    <li className='list-item' >
      <span>{task.name}</span>
      <div>
        <button className='btn-delete task-btn' onClick={() => removeTask(task.id)}>deletar</button>
        <button className='btn-edit task-btn' onClick={() => findItem(task.id)}>atualizar</button>
      </div>
    </li>
  );
}

export default TaskItem;

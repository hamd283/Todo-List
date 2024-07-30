import React from 'react';
import Task from './Task';

function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;

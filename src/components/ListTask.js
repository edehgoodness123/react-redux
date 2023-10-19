import React, { useState } from 'react';
// import AddTask from './AddTask';
import Task from './Task';

const ListTask = ({ tasks, addTask, toggleTask, editTask }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'notDone') {
      return !task.isDone;
    }
    return true;
  });

  return (
    <div>
      {/* <AddTask addTask={addTask} /> */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default ListTask;

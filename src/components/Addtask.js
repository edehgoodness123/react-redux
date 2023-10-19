import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      addTask({ id: Date.now(), description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;

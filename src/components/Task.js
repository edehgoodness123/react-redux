import React, { useState } from 'react';

const Task = ({ task, editTask, toggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (editedDescription.trim() !== '') {
      editTask({ ...task, description: editedDescription });
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
          <button onClick={() => toggleTask(task.id)}>Toggle</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;

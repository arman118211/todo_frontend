import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(todo.id), 300);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <div className="todo-checkbox-wrapper">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <label htmlFor={`todo-${todo.id}`} className="checkbox-label">
          <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </label>
      </div>
      
      <span className="todo-text">{todo.text}</span>
      
      <button 
        onClick={handleDelete}
        className="delete-btn"
        aria-label="Delete todo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
        </svg>
      </button>
    </div>
  );
}

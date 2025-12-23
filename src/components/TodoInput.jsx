import { useState } from 'react';
import './TodoInput.css';

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input-form">
            <div className="input-wrapper">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="todo-input"
                    maxLength={200}
                />
                <button
                    type="submit"
                    className="add-btn"
                    disabled={!text.trim()}
                    aria-label="Add todo"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </form>
    );
}

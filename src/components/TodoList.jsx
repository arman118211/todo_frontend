import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import './TodoList.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date()
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const stats = {
        total: todos.length,
        active: todos.filter(t => !t.completed).length,
        completed: todos.filter(t => t.completed).length
    };

    return (
        <div className="todo-list-container">
            <TodoInput onAdd={addTodo} />

            {/* Stats */}
            <div className="stats-container">
                <div className="stat-item">
                    <span className="stat-value">{stats.total}</span>
                    <span className="stat-label">Total</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value gradient-text">{stats.active}</span>
                    <span className="stat-label">Active</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">{stats.completed}</span>
                    <span className="stat-label">Completed</span>
                </div>
            </div>

            {/* Filters */}
            <div className="filter-container">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                {stats.completed > 0 && (
                    <button className="clear-btn" onClick={clearCompleted}>
                        Clear Completed
                    </button>
                )}
            </div>

            {/* Todo List */}
            <div className="todos-wrapper">
                {filteredTodos.length === 0 ? (
                    <div className="empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                        <p className="empty-text">
                            {filter === 'completed' && todos.length > 0
                                ? 'No completed tasks yet'
                                : filter === 'active' && todos.length > 0
                                    ? 'All tasks completed! 🎉'
                                    : 'No tasks yet. Add one above!'}
                        </p>
                    </div>
                ) : (
                    <div className="todos-list">
                        {filteredTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={toggleTodo}
                                onDelete={deleteTodo}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

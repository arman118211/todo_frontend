import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="gradient-text">Todo</span> List
          </h1>
          <p className="app-subtitle">Organize your tasks with style</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <TodoList />
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React & ❤️</p>
      </footer>
    </div>
  );
}

export default App;

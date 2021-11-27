import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoApp />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <header>
        <Timer />
        <h1>To Do List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

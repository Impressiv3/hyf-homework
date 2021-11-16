import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import "./App.css";
import todosData from "./todosData.json";

export default function App() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
      setTodoData(prev => [...prev, todosData.ToDoData]);
  }, []);

  return (
    <div className='App'>
      <header>
        <Timer />
        <h1>To Do List</h1>
      </header>
      <main></main>
    </div>
  );
}

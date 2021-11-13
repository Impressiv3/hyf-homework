import React, { useState } from "react";
import ToDoItem from "./ToDoItem";



export default function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {todos.map((todo) => <ToDoItem key={todo.id} todos={todos} description={todo.description}/>)}
    </div>
  );
}

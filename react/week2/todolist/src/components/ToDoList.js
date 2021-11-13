import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";



export default function ToDoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {todos.map((todo) => <ToDoItem key={todo.id} description={todo.description}/>)}
    </div>
  );
}

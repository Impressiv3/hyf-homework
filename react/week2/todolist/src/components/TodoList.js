import React, { useState, useEffect } from "react";
import data from "../data";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function ToDoList() {
  const [todos, setTodos] = useState([...data]);

  function RenderTodoListItems() {
    return todos.map((todo) => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />);
  }

  return (
    <div>
      {<TodoForm todos={todos} setTodos={setTodos}/>}
      {todos.length <= 0 ? <h1>Nothing to do</h1> : <ul>RenderTodoListItems()</ul>}
    </div>
  );
}

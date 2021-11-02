import React from "react";
import ToDoListItem from "./ToDoListItem";
import data from "./data.json";

export default function ToDoList() {
  const toDos = data.todos;

  return (
    <ul>
      {toDos.map((todo) => {
        return <ToDoListItem todo={todo} />;
      })}
    </ul>
  );
}

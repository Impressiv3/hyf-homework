import React from "react";

export default function ToDoListItem(props) {
  return (
    <li>
      <h3>What: {props.todo.description}</h3>
      <h3>When: {props.todo.deadline}</h3>
    </li>
  );
}

import React, { useState } from "./TodoItem";

export default function TodoItem(props) {
  const { todo } = props;
  return (
    <li className='list-item'>
      <div>Task: {todo.description}</div>
      <div>{todo.completed === true ? "Completed" : "In progress"}</div>
      <div>Deadline: {todo.deadline}</div>
    </li>
  );
}

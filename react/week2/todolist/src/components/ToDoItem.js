import React from "react";

export default function TodoItem({ description }) {
  return (
    <div className="todo-item">
      <li>
        <h2>{description}</h2>
        <input type="checkbox"/>
        <button>Delete</button>
      </li>
    </div>
  );
}



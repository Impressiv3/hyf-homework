import React from "react";

export default function TodoItem({ description, completed, todo, todos, setToDos }) {
  return (
    <div className='todo-item'>
      <li>
        {description}
        <input type='checkbox' />
        <button>Delete</button>
      </li>
    </div>
  );
}

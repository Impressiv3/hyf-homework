import React, { useState } from "react";

export default function TodoListItem(props) {
  const { todo, todos, setTodos } = props;
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [todoListItemForm, setTodoListItemForm] = useState({
    description: todo.description,
    deadline: todo.deadline,
  });

  return (
    <li>
      <p
        style={{
          textDecorationLine: todo.completed ? "line-through" : "none",
        }}
      >
        Description: {todo.description}{" "}
      </p>
      <p>Deadline: {new Date(todo.deadline).toISOString().split("T")[0]}</p>
    </li>
  );
}

/*
if editON show: inputfield + buttons , editOff show: description + deadline + buttons
things to always show, buttons edit/update + delete


    <li>
      isEditModeOn
      ? <input type='text' value={todoListItemForm.description} /> 
      :
      <p
        style={{
          textDecorationLine: todo.completed ? "line-through" : "none",
        }}
      >
        Description: {todo.description}{" "}
      </p>
      <p>Deadline: {new Date(todo.deadline).toISOString().split("T")[0]}</p>
      
    </li>

*/

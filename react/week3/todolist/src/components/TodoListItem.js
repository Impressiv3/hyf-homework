import React, { useState } from "react";

export default function TodoListItem(props) {
  const { todo, todos, setTodos } = props;
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [todoListItemForm, setTodoListItemForm] = useState({
    description: todo.description,
    deadline: todo.deadline,
  });

  function toggleCompleted() {
    setTodos((prev) => {
      const newTodos = prev;
      return newTodos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  }

  function toggleEditMode() {
    setIsEditModeOn((prev) => !prev);
  }

  function saveAndToggleEditmode() {
    setTodos((prev) => {
      const newTodos = prev;
      return newTodos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, description: todoListItemForm.description };
        }
        return item;
      });
    });

    setIsEditModeOn((prev) => !prev);
  }

  function handleRemoveClick(e) {
    setTodos((prev) => {
      const newTodos = prev.filter((item) => item.id !== todo.id);
      return newTodos;
    });
  }

  function handleFormChange(e) {
    setTodoListItemForm({ ...todoListItemForm, [e.target.name]: e.target.value });
  }

  return (
    <li>
      {isEditModeOn ? (
        <input
          type='text'
          name='description'
          onChange={handleFormChange}
          value={todoListItemForm.description}
        ></input>
      ) : (
        <p
          style={{
            textDecorationLine: todo.completed ? "line-through" : "none",
          }}
        >
          Description: {todo.description}
        </p>
      )}

      <p>Deadline: {new Date(todo.deadline).toISOString().split("T")[0]}</p>
      <input
        type='checkbox'
        name='completed'
        checked={todo.completed}
        onChange={toggleCompleted}
      ></input>
      {isEditModeOn ? (
        <button type='button' onClick={saveAndToggleEditmode}>
          Save
        </button>
      ) : (
        <button type='button' onClick={toggleEditMode}>
          Edit
        </button>
      )}
      <button className='button' type='button' onClick={handleRemoveClick}>
        Remove
      </button>
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

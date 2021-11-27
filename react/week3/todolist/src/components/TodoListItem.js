import React, { useState } from "react";

export default function TodoListItem(props) {
  const { todo, todos, setTodos, setMessage } = props;
  const { id, description, deadline, completed } = todo;
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [editedDescription, setEditedDescription] = useState();

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

  function handleRemoveClick(e) {
    setTodos((prev) => {
      const newTodos = prev.filter((item) => item.id !== todo.id);
      setMessage(`${todo.description} has been removed.`);
      return newTodos;
    });
  }

  function toggleEditMode() {
    setEditedDescription(todo.description);
    setMessage("Edit your todo");
    setIsEditModeOn((prev) => !prev);
  }

  function saveAndToggleEditmode() {
    if (editedDescription === "") {
      setEditedDescription(todo.description);
      setMessage("Todo cannot be empty.");
    } else {
      setTodos((prev) => {
        const newTodos = prev;
        return newTodos.map((item) => {
          if (item.id === todo.id) {
            return { ...item, description: editedDescription };
          }
          return item;
        });
      });
      setMessage("Your todo has been updated");
      setIsEditModeOn((prev) => !prev);
    }
  }

  function updateEditedDescription(e) {
    e.preventDefault();
    setEditedDescription(e.target.value);
  }

  return (
    <div>
      {isEditModeOn ? (
        <input
          type="text"
          name="description"
          value={editedDescription}
          onChange={updateEditedDescription}
        ></input>
      ) : (
        <p
          style={{
            textDecorationLine: completed ? "line-through" : "none"
          }}
        >
          Description: {description}
        </p>
      )}
      <p>Deadline: {new Date(deadline).toISOString().split("T")[0]}</p>
      {isEditModeOn ? null : (
        <>{ completed ? "Completed" : "Active"}:
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={toggleCompleted}
        ></input></>
      )}
      {
        <button
          type="button"
          onClick={isEditModeOn ? saveAndToggleEditmode : toggleEditMode}
        >
          {isEditModeOn ? "Save" : "Edit"}
        </button>
      }
      <button className="button" type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
}

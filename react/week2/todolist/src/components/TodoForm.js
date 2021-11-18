import React, { useState } from "react";

export default function Form(props) {
  const { todos, setTodos } = props;
  const [formState, setFormState] = useState({ description: "", isChecked: false });

  function handleFormChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function addToDo(e) {
    e.preventDefault();
    const newTodo = {
      id: `${Math.floor(Math.random() * 10000)}`,
      description: `${formState.description ? formState.description : "I've got nothing to do!"}`,
      completed: false,
    };
    setTodos((prev) => [...todos, newTodo]);
  }

  return (
    <div className='todo-form'>
      <form onSubmit={addToDo}>
        <input
          type='text'
          name='description'
          value={formState.description}
          onChange={handleFormChange}
        />
        <button type='submit' value='Submit'>
          Add To Do
        </button>
      </form>
    </div>
  );
}

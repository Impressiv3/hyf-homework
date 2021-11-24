import React, { useState } from "react";

export default function TodoForm(props) {
  const { todos, setTodos } = props;
  const [formState, setFormState] = useState({
    description: "",
    deadline: "",
  });

  function handleFormChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function addToDo(e) {
    e.preventDefault();
    const newTodo = {
      id: `${Math.floor(Math.random() * 10000)}`,
      description: `${formState.description ? formState.description : "I've got nothing to do!"}`,
      deadline: `${formState.deadline ? new Date(formState.deadline) : "2021-11-12"}`,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <form onSubmit={addToDo}>
        <fieldset>
          <legend> Add something to do </legend>
          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            id='description'
            name='description'
            value={formState.description}
            onChange={handleFormChange}
          ></input>
          <label htmlFor='deadline'>Deadline :</label>
          <input
            type='date'
            name='deadline'
            value={formState.deadline}
            onChange={handleFormChange}
          ></input>
          <button type='submit' name='submit'>
            ADD
          </button>
        </fieldset>
      </form>
    </div>
  );
}

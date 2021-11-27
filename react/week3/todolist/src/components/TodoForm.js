import React, { useState } from "react";

export default function TodoForm(props) {
  const { todos, setTodos, setMessage } = props;
  const [formState, setFormState] = useState({
    description: "",
    deadline: ""
  });

  function isDescriptionValid(description) {
    if (description !== "") {
      return true;
    } else {
      setMessage("You need to give a description");
      return false;
    }
  }

  function isDateValid(date) {
    if (Date.now() - Date.parse(date) < 0) {
      return true;
    } else {
      setMessage("Deadline must be later than now.");
      return false;
    }
  }

  function handleFormChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function addToDo(e) {
    e.preventDefault();
    if (
      isDescriptionValid(formState.description) &&
      isDateValid(formState.deadline)
    ) {
      const newTodo = {
        id: `${Math.floor(Math.random() * 10000)}`,
        description: formState.description,
        deadline: new Date(formState.deadline),
        completed: false
      };

      setMessage(`${formState.description} has been added to the list.`);
      return setTodos([...todos, newTodo]);
    } else {
      return setMessage("You need to provide valid description and date.")
    }
  }

  return (
    <div>
      <form onSubmit={addToDo}>
        <fieldset>
          <legend> Add something to do </legend>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formState.description}
            onChange={handleFormChange}
            required
          ></input>
          <label htmlFor="deadline">Deadline :</label>
          <input
            type="date"
            name="deadline"
            value={formState.deadline}
            onChange={handleFormChange}
            required
          ></input>
          <button type="submit" name="submit">
            ADD
          </button>
        </fieldset>
      </form>
    </div>
  );
}

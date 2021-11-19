import React from "react";
export default function TodoForm(props) {
const { setState } = props;

  return (
    <form>
      <fieldset>
        <legend>Add something to do</legend>
        <label htmlFor="description">Description : </label>
        <input type='text' name="description"></input>
        <label htmlFor="deadline">Deadline :</label>
        <input type='datetime-local' name="deadline"></input>
        <button type='submit' value='Submit'>
          Add to do
        </button>
      </fieldset>
    </form>
  );
}

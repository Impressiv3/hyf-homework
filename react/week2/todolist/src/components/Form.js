import React from "react";

export default function Form({ todos, setTodos, inputText, setInputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10000), description: inputText , completed: false },
    ]);
     setInputText("");
  };

  return (
    <>
      <form>
        <h2>{inputText}</h2>
        <input type='text' placeholder='Add something to do...' value={inputText} onChange={inputTextHandler}></input>
        <button type='submit' onClick={submitTodoHandler}>
          Add
        </button>
      </form>
    </>
  );
}

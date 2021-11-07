import React, { useState, useEffect } from "react";
import todosData from "./todosData";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [timer, setTimer] = useState(0);
  let intervalId;

  const changeTimer = () => {
    setTimer((prev) => prev + 1);
  };

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(changeTimer, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const toDoItems = todosData.map(toDoItem => <ToDoItem key={toDoItem.id} toDoItem={toDoItem}/>)

  return (
    <>
      <h1>To Do List</h1>
      <h3>You have spent {timer} sec on this page.</h3>
      {toDoItems}
    </>
  );
};

export default ToDoList;

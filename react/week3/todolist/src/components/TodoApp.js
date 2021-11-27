import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoMessage from "./TodoMessage";

export default function TodoApp() {
  const API =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  const DEFAULT_QUERY = "";

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: null });
  const [message, setMessage] = useState("App started");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setIsLoading(true);
    setMessage("Loading...");
    fetch(API + DEFAULT_QUERY)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(
        (data) =>
          setTodos([
            ...data.map((item) => ({
              ...item,
              deadline: new Date(item.deadline),
              completed: false
            }))
          ]),
        setIsLoading(false),
        setMessage("Data loaded")
      )
      .catch((error) => setError({ error: error }), setIsLoading(false));
  }

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} setMessage={setMessage} />
      {(() => {
        if (isLoading) {
          return <p>Gathering your data, please wait...</p>;
        } else {
          if (error.error !== null) {
            return <p>There was an error while trying to load data</p>;
          } else {
            return (
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setMessage={setMessage}
              />
            );
          }
        }
      })()}
      <TodoMessage message={message} />
    </div>
  );
}

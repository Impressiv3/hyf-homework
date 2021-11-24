import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoMessage from "./TodoMessage";
import { DateTime } from "luxon";

export default function TodoApp() {
  const API = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  const DEFAULT_QUERY = "";

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: null });
  const [message, setMessage] = useState("App started");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
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
              /*     deadline: DateTime.fromISO(item.deadline), */
              deadline: new Date(item.deadline),
              completed: false,
            })),
          ]),
        setLoading(false),
        setMessage("Data loaded"),
      )
      .catch((error) => setError({ error: error.message }), setLoading(false));
  }

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      {error.error !== null ? (
        <p>An error has occurred while loading your data</p>
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
      <TodoMessage message={message} />
    </div>
  );
}

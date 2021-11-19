import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoMessage from "./TodoMessage";

export default function TodoList() {
  const API = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  const DEFAULT_QUERY = "";

  const [state, setState] = useState({
    data: [],
    isLoading: false,
    error: null,
    message: "Welcome !",
  });
  const { data, isLoading, error, message } = state;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(
        (data) => setState({ data: data, isLoading: false, message: "Loading complete" }),
        state.data.length > 0 ? state.data.map((item) => (item.completed = false)) : null,
      )
      .catch((error) => setState({ error, isLoading: false, message: "Failed to load data" }));
  }

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <div>Loading Todo List</div>
      ) : (
        <div>
          <TodoForm setState={setState} />
          <ul>
            {data.map((todo) =>
              data.length <= 0 ? (
                <h1>You have nothing to do</h1>
              ) : (
                <TodoItem key={todo.id} todo={todo} setState={setState} />
              ),
            )}
          </ul>
          <TodoMessage message={message} />
        </div>
      )}
    </>
  );
}

/* https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw */

/* return (
  <>
    {error ? (
      <p>{error.message}</p>
    ) : isLoading ? (
      <div>Loading Todo List</div>
    ) : (
      <div>
        <TodoForm />
        <ul>
          {data.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    )}
  </>
); */

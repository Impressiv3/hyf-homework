import React from "react";
import TodoListItemWrapper from "./TodoListItemWrapper";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, setTodos, setMessage } = props;

  return (
    <ul>
      {todos ? (
        todos.map((todo) => (
          <TodoListItemWrapper key={todo.id}>
            <TodoListItem todo={todo} todos={todos} setTodos={setTodos} setMessage={setMessage} />
          </TodoListItemWrapper>
        ))
      ) : (
        <li>You have nothing to do</li>
      )}
    </ul>
  );
}

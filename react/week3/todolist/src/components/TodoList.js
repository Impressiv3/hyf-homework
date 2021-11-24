import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <ul>
      {todos ? (
        todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
      ) : (
        <li>You have nothing to do</li>
      )}
    </ul>
  );
}

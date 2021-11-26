import TodoListItemWrapper from "./TodoListItemWrapper";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <ul>
      {todos ? (
        todos.map((todo) => (
          <TodoListItemWrapper todo={todo}>
            <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} />
          </TodoListItemWrapper>
        ))
      ) : (
        <li>You have nothing to do</li>
      )}
    </ul>
  );
}

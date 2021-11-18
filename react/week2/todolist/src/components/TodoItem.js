export default function ToDoItem(props) {
  const { todo, setTodos } = props;

  function toggleCompleted() {
    setTodos((prev) => {
      const newTodos = prev;
      return newTodos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  }

  function handleRemoveClick(e) {
    setTodos((prev) => {
      const newTodos = prev.filter((item) => item.id !== todo.id);
      return newTodos;
    });
  }

  return (
    <li name={todo.id} style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}>
      {todo.description}
      <input
        type='checkbox'
        name='completed'
        checked={todo.completed}
        onChange={toggleCompleted}
      ></input>
      <button className='button' type='button' onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
}

export default function TodoListItemWrapper(props) {
  return <div className="wrapper" key={props.id}>{props.children}</div>;
}

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.toDoItem.completed}/>
            <p>{props.toDoItem.text}</p>
            <button>Delete</button>
        </div>
    )
}

export default TodoItem
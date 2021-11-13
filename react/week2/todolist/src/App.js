import { useState } from "react";
import Timer from "./components/Timer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import todosData from "./components/todosData";
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([...todosData]);
  
  return (
    <div className="App">
      <Timer/>
      <header>
        <h1>To Do List</h1>
      </header>
      
       <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
       <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

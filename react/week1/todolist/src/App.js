import React from "react";
import './App.css';
import Container from "./Container";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <div className="App">
        <h1>ToDo List</h1>
      </div>
      <Container>
        <ToDoList></ToDoList>
      </Container>
    </>
  );
}

export default App;

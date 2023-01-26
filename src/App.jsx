import "./App.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(todos);

  const addTodo = (text) => {
    if (text.length <= 2 || text.length >= 30) return;

    const todo = {
      value: text,
      id: Math.floor(Math.random() * 100000),
    };
    setTodos((prevState) => [...prevState, todo]);
    setInputValue("");
  };

  return (
    <div className="todo-app">
      <div className="todo-form">
        <h1>What is the plan for today?</h1>
        <input
          name="text"
          placeholder={"Add a todo"}
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="todo-button" onClick={() => addTodo(inputValue)}>
          Add todo
        </button>
      </div>
      {todos.map((todo) => (
        <h1></h1>
      ))}
    </div>
  );
};

export default App;

import "./App.css";
import Todo from "./components/Todo";

import { useState } from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [todoToEdit, setTodoToEdit] = useState({
    id: null,
    value: "",
  });
  console.log(todoToEdit);

  const addTodo = (text) => {
    if (text.length <= 2 || text.length >= 30) return;
    const todo = {
      value: text,
      id: Math.floor(Math.random() * 100000),
    };
    setTodos((prevState) => [...prevState, todo]);
    setInputValue("");
  };

  const onEditClick = (todoToEdit) => {
    setTodoToEdit(todoToEdit);
    setInputValue(todoToEdit.value);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <TodoForm
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoToEdit={todoToEdit}
      />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          value={todo.value}
          id={todo.id}
          isComplete={todo.isComplete}
          //removeTodo={removeTodo}
          completeTodo={completeTodo}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default App;

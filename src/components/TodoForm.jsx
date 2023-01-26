import React from "react";

const CustomForm = () => {
  return <div></div>;
};

const TodoForm = ({ addTodo, inputValue, setInputValue, todoToEdit }) => {
  return (
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
  );
};

export default TodoForm;

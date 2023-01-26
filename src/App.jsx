import "./App.css";

const App = () => {
  return (
    <div className="todo-app">
      <div className="todo-form">
        <h1>What is the plan for today?</h1>
        <input name="text" placeholder={"Add a todo"} className="todo-input" />
        <button className="todo-button">Add todo</button>
      </div>
      <div className="todo-row">
        <div>Edit a video</div>
      </div>
    </div>
  );
};

export default App;

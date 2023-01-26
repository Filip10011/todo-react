import React from "react";

const Todo = () => {
  return (
    <div key={todo.id} className="todo-row">
      <div>{todo.value}</div>
      <div className="icons">
        <TiEdit className="edit-icon" />
        <RiCloseCircleLine className="delete-icon" />
      </div>
    </div>
  );
};

export default Todo;

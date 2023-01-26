import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ value, id, completeTodo, isComplete, onEditClick }) => {
  return (
    <div className={isComplete ? "todo-row complete" : "todo-row"}>
      <div onClick={() => completeTodo(id)}>{value}</div>
      <div className="icons">
        <TiEdit
          className="edit-icon"
          onClick={() => onEditClick({ id, value })}
        />
        <RiCloseCircleLine className="delete-icon" />
      </div>
    </div>
  );
};

export default Todo;

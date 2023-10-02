import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-area">
      <div className="todo-text-area">
        <span>{todo}</span>
      </div>
      <button onClick={onDelete} className="btn btn-blue">
        削除
      </button>
    </div>
  );
};

export default Todo;

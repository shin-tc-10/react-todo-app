import React, { useState } from "react";
import Todo from "./Todo";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
    console.log(todos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <main>
        <div className="todo">
          <h2>React Todo App</h2>
          <div>
            <input type="text" value={inputValue} onChange={handleInputChange} className="textbox-001" placeholder="TODOを入力" />
            <button onClick={handleAddTodo} className="btn btn-blue btn-add">追加</button>
          </div>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onDelete={() => handleDeleteTodo(index)}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;

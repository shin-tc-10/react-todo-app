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
    // setInputValue("");
    console.log(todos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <main>
        <div className="todo">
          <h1>今日のやること</h1>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <button onClick={handleAddTodo}>追加</button>
          </div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onDelete={() => handleDeleteTodo(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;

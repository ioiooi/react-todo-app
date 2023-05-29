import "bulma/css/bulma.css";
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter a new todo"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="notification">
            <div className="level">
              <div className="level-left">{todo.text}</div>
              <div className="level-right">
                <button
                  className="delete"
                  onClick={() => handleRemoveTodo(todo.id)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

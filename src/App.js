import "bulma/css/bulma.css";
import "./index.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        isActive: true,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodoState = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isActive: !todo.isActive,
        };
      }

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="section">
      <div className="container is-max-desktop">
        <h1 className="title is-1">Todo App</h1>
        <div className="field has-addons">
          <div className="control is-expanded">
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
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="notification my-2">
              <div className="columns is-mobile is-vcentered">
                <div
                  className={
                    todo.isActive ? "column pointer" : "column pointer strike"
                  }
                  onClick={() => handleToggleTodoState(todo.id)}
                >
                  {todo.text}
                </div>
                <div className="column is-narrow">
                  <button
                    className="delete is-medium"
                    onClick={() => handleRemoveTodo(todo.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

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
        <div >
          {todos.map((todo) => (
            <div key={todo.id} className="notification my-2">
              <div className="columns is-mobile is-vcentered">
                <div className="column">{todo.text}</div>
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

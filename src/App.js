import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "bulma/css/bulma.css";
import "./index.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodoState = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
      )
    );
  };

  return (
    <div className="section">
      <div className="container is-max-desktop">
        <h1 className="title is-1">Todo App</h1>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodoState={handleToggleTodoState}
        />
      </div>
    </div>
  );
};

export default TodoApp;

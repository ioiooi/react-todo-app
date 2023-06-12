import TodoItem from "./TodoItem";
import React from "react";

const TodoList = ({ todos, handleRemoveTodo, handleToggleTodoState }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodoState={handleToggleTodoState}
        />
      ))}
    </div>
  );
};

export default TodoList;

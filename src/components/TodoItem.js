import React from "react";

const TodoItem = ({ todo, handleRemoveTodo, handleToggleTodoState }) => {
  const { id, text, isActive } = todo;

  const handleItemClick = () => {
    handleToggleTodoState(id);
  };

  const handleDeleteClick = () => {
    handleRemoveTodo(id);
  };

  return (
    <div className="notification my-2">
      <div className="columns is-mobile is-vcentered">
        <div
          className={`column pointer${isActive ? "" : " strike"}`}
          onClick={handleItemClick}
        >
          {text}
        </div>
        <div className="column is-narrow">
          <button className="delete is-medium" onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

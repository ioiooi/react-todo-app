import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue) {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        isActive: true,
      };
      handleAddTodo(newTodo);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;

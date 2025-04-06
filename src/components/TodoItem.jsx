// src/components/TodoItem.jsx
import React from "react";

const TodoItem = ({ label, onDelete }) => {
    return (
        <li className="todo-item">
            <span>{label}</span>
            <button onClick={onDelete}>❌</button>
        </li>
    );
};

export default TodoItem;

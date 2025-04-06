// src/components/TodoList.jsx
import React, { useEffect, useState } from "react";
import {
    createUser,
    getTasks,
    updateTasks,
    deleteAllTasks
} from "../services/api";
import TodoItem from "./TodoItem"; 

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    useEffect(() => {
        const init = async () => {
            await createUser();
            await loadTasks();
        };
        init();
    }, []);

    const handleAdd = async () => {
        if (newTask.trim() === "") return;

        const updatedTasks = [...tasks, { label: newTask, done: false }];
        setTasks(updatedTasks);
        setNewTask("");

        await updateTasks(updatedTasks);
    };

    const handleDelete = async (index) => {
        const filteredTasks = tasks.filter((_, i) => i !== index);
        setTasks(filteredTasks);

        await updateTasks(filteredTasks);
    };

    const handleClearAll = async () => {
        await deleteAllTasks();
        setTasks([]);
    };

    return (
        <div className="todo-container">
            <h2>📝 Todo List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Agregar tarea"
            />
            <button onClick={handleAdd}>Agregar</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        label={task.label}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </ul>
            {tasks.length > 0 && <button onClick={handleClearAll}>🧹 Borrar todo</button>}
        </div>
    );
};

export default TodoList;

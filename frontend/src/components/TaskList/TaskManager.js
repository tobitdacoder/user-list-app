// src/components/TaskList/TaskList.js
// import React from 'react';
// import styles from './TaskList.module.css';

// export const TaskList = ({ tasks, onPageChange, currentPage }) => {
//   return (
//     <div className={styles.taskList}>
//       {tasks.map(task => (
//         <div key={task.id} className={styles.taskCard}>
//           <h3>{task.title}</h3>
//           <p>{task.description}</p>
//           <p>Due: {new Date(task.due_date).toLocaleDateString()}</p>
//         </div>
//       ))}
//       <div className={styles.pagination}>
//         <button 
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage}</span>
//         <button 
//           onClick={() => onPageChange(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../../api";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleAddTask = async () => {
        if (newTask.title.trim()) {

            try {
                const addedTask = await addTask(newTask);
                setTasks([...tasks, addedTask]);
                setNewTask({ title: "", description: "" }); // Clear the input fields
            } catch (error) {
                console.error("Error adding task", error);
            }
            // await addTask(newTask);
            // setNewTask({ title: "", description: "" });
            // loadTasks();
        }
    };

    const handleUpdateTask = async (id, completed) => {
        const updatedTask = tasks.find(task => task.id === id);
        await updateTask(id, { ...updatedTask, completed: !completed });
        loadTasks();
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input 
                type="text"
                placeholder="Task Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <input 
                type="text"
                placeholder="Task Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong> - {task.description} 
                        <button onClick={() => handleUpdateTask(task.id, task.completed)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;

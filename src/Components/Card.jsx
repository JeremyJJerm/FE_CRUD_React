import React, { useState, useEffect } from "react";
import { ToDoForm } from "./ToDoForm";
import ToDoDisplay from "./ToDoDisplay";
import EditToDo from "./EditToDo";

export default function Card () {
        const[todos, setTodos] = useState([])
        const[idCounter, setIdCounter] = useState(1)

        // // UseEffect used to immediately update and is currently used check arrray values console without pressing submit first
        // useEffect(() => {
        //     console.log(todos);
        // }, [todos]); 

        const addToDo = (todo) => {
            const newTodo = {
                id: idCounter,
                task: todo,
                completed: false,
                isEditing: false
            };
        setTodos([...todos, newTodo]);
        setIdCounter(idCounter + 1);
        console.log(todos); //Checking
    };

        const deleteToDo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

        const toggleEdit = (id) => {
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
        };

        const updateTask = (newTask, id) => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
                )
            );
        };

        const toggleComplete = id => {
            setTodos(todos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }

    return (
        <div className = 'Card'>
            <h1>Get it done!</h1>
            <ToDoForm addToDo = {addToDo} />
            {todos.map((todo => 
                todo.isEditing ? (
                    <EditToDo key = {todo.id} updateTask={updateTask} task={todo} />
                ) : (
                <ToDoDisplay 
                    task = {todo} 
                    key = {todo.id} 
                    toggleComplete = {toggleComplete} 
                    deleteToDo = {deleteToDo} 
                    toggleEdit = {toggleEdit} 
                />
                )
            )
        )}
        </div>
    )
}
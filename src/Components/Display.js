import React from "react";
import Todo from "./Todo";

export default function TodoDisplay({Todos, setTodos, filterTodos})
{
    return(
        <div className="todo--container">
            <ul className="todo--list">
                {filterTodos.map(todo => (
                    <Todo key = {todo.id} Todos={Todos} setTodos ={setTodos} text = {todo.text} todo = {todo}/>
                ))}
            </ul>
        </div>
    )
}

// {TODOS -> todo#1, todo#2, todo#3......}
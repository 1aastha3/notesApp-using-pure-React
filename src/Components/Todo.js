import React from "react";

export default function Todo({todo, text, Todos, setTodos})
{
    function deleteHandler(){
        setTodos(Todos.filter((el) => el.id !== todo.id))
        console.log(todo)
    }

    function checkedHandler()
    {
        setTodos(Todos.map(item => {
            if(item.id === todo.id)
            {
                return{
                    ...item,
                    completed : !item.completed
                }
            }
            return item
        }))
    }
    return(
        <div className="todo">
            <li className={`todo--item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="check" onClick={checkedHandler}>Check</button>
            <button className="trash" onClick={deleteHandler}>Trash</button>
        </div>
    )
}
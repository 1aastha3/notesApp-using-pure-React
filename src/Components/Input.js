import React from "react";

export default function Input({InputText, setInputText, Todos, setTodos, setStatus, filterTodos})

{
    function inputHandler(event){
        return(
        setInputText(event.target.value)
        )
    }

    function submitHandler(event)
    {
        event.preventDefault()
        setTodos([
            ...Todos,
            {text: InputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("")
    }

    function statusHandler(e){
        setStatus(e.target.value)
    } 

    return(
        <form className="todo--form">
            <input value = {InputText} type="text" className = "todo--input" onChange = {inputHandler} placeholder="Enter a Todo"/>
            <button className="todo--button" type="submit" onClick={submitHandler}>
                +
            </button>
            <div className="select">
                <select onChange= {statusHandler} name="todos" className="filter--todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incomplete</option>
                </select>
            </div>
        </form>
    )
}
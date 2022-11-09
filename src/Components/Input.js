import React from "react";

export default function Input()
{
    return(
        <form className="todo--form">
            <input type="text" className = "todo--input"/>
            <button className="todo--button" type="submit">
                +
            </button>
            <div className="select">
                <select name="todos" className="filter--todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    )
}
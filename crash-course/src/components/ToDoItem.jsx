import React from 'react';
import "../css/ToDo.css"

const ToDoItem = (props) => {
    return (
        <div className='todo-item'>
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            {props.item.completed ? <p className='completed__item'>{props.item.text}</p> : <p>{props.item.text}</p>}
        </div>
    );
}

export default ToDoItem;

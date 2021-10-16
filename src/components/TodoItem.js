import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className='TodoItem'>
            <span
                className={`TodoItem-icons icon-Check ${props.completed && 'icon-Check--active'}`} 
                onClick={props.onComplete}>
                    ✓
            </span>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
            </p>
            <span
                className="TodoItem-icons icon-Delete"
                onClick={props.onDelete}>
                    ✕
            </span>
        </li>
    );
}

export { TodoItem };
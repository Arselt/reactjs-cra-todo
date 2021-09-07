import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className='TodoItem'>
            <span className="TodoItem-icons">✅</span>
            <p>{props.text}</p>
            <span className="TodoItem-icons">❌</span>
        </li>
    );
}

export { TodoItem };
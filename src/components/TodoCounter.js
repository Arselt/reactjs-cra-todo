import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <>
            <section className="TodoHero">
                <h1 className="TodoSalute"> Hey 👋</h1>
                <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} To Do's</h2>
            </section>
        </>
    );
}

export { TodoCounter };
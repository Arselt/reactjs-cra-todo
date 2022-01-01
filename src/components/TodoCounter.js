import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <>
            <section 
                className={`TodoHero ${!!loading && "TodoHero--loading"}`}
            >
                <h1 className="TodoSalute"> Hey 👋</h1>
                <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} To Do's</h2>
            </section>
        </>
    );
}

export { TodoCounter };
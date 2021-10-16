import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <>
            <section className="TodoHero">
                <h1 className="TodoSalute"> Hey 👋</h1>
                <h2 className="TodoCounter"> Has completado {completed} de {total} To Do's</h2>
            </section>
        </>
    );
}

export { TodoCounter };
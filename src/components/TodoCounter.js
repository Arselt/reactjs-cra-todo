import React from 'react';
import './TodoCounter.css';

function TodoCounter() {
    return (
        <>
            <section className="TodoHero">
                <h1 className="TodoSalute"> Hey 👋</h1>
                <h2 className="TodoCounter"> Has completado 2 de 3 To Do's</h2>
            </section>
        </>
    );
}

export { TodoCounter };
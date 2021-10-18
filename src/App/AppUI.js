import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
          {error && <p className="useEffect">Hubo un error...</p>}
          {loading && <p className="useEffect">Estamos cargando, no te desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p className="useEffect">¡Crea un TODO!</p>}
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
        </TodoList>
        
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

    </React.Fragment>
  );
}

export { AppUI };
import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert';

function App() {
    const { 
        error, 
        loading, 
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos,
      } = useTodos();

    return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
        
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <p className="useEffect">Hubo un error...</p>}
          onLoading={() => <p className="useEffect">Estamos cargando, no te desesperes...</p>}
          onEmptyTodos={() => <p className="useEffect">¡Crea un TODO!</p>}
          onEmptySearchResults={(searchText) => <p className="useEffect">No hay resultados para <strong>{searchText}</strong> </p>}
          
          // render={todo => (
          //   <TodoItem
          //     key={todo.text} 
          //     text={todo.text} 
          //     completed={todo.completed}
          //     onComplete={() => completeTodo(todo.text)}
          //     onDelete={() => deleteTodo(todo.text)}
          //   />)}
          >
          
          {todo => (
            <TodoItem
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
                  

        </TodoList>

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        
        {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
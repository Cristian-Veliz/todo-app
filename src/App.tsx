// App.tsx
import React, { useState } from 'react';
import { Todos } from './components/Todos';
import { TodoId, TodoCompleted, FilterValue } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';

const mockTodos = [
  {
    id: '1',
    title: 'Tarea 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Tarea 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Tarea 3',
    completed: false,
  }
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: { id: string; completed: TodoCompleted }): void => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter);
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className='todoapp'>
      <h1 style={{ fontSize: '35px', color: '#3498db', marginTop: '50px' }}>
        Organiza tu Día con Todo-App 🚀
      </h1>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;


 
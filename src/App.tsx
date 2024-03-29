// App.tsx
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./consts";
import { type TodoId, TodoCompleted, FilterValue, TodoTitle } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "meet con el equipo",
    completed: false,
  },
  {
    id: "2",
    title: "deploy",
    completed: false,
  },
  {
    id: "3",
    title: "ir al medico",
    completed: false,
  },
  {
    id: "4",
    title: "ir a correr",
    completed: false,
  },
  {
    id: "5",
    title: "Pasear a Simón",
    completed: false,
  },
  {
    id: "6",
    title: "Ir a correr",
    completed: false,
  },
];


const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: {
    id: string;
    completed: TodoCompleted;
  }): void => {
    const updatedTodos = todos.map((todo) => {
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
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <h1 style={{ fontSize: "35px", color: "#3498db", marginTop: "50px" }}>
        {/* Organiza tu Día con Todo-App 🚀 */}
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

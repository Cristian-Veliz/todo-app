import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Landing } from "./components/Landing/Landing";
import { TODO_FILTERS } from "./consts";
import { type TodoId, TodoCompleted, FilterValue, TodoTitle } from "./types";
import Swal from "sweetalert2";

// Datos simulados de tareas (mockTodos)
const mockTodos = [
  {
    id: "1",
    title: "Tarea 1",
    completed: false,
  },
  {
    id: "2",
    title: "Tarea 2",
    completed: false,
  },
  {
    id: "3",
    title: "Tarea 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  // Estado para las tareas y el filtro seleccionado
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Obtener tareas desde localStorage
    const storageTodos = localStorage.getItem('todos')
    if (storageTodos) {
      // Convertir la cadena de texto almacenada en un objeto de JavaScript
      setTodos(JSON.parse(storageTodos))
    }
  }, [])

  // Manejar la eliminación de una tarea
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    // Guardar las tareas actualizadas en localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos))
  };

  // Manejar el cambio de estado (completada/no completada) de una tarea
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
    // Guardar las tareas actualizadas en localStorage
    localStorage.setItem('todos', JSON.stringify(updatedTodos))

    if (completed) {
      // Mostrar una alerta si la tarea se marca como completada
      Swal.fire({
        title: 'TAREA COMPLETA',
        text: '¡Sigue adelante! ✅',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    }
  };

  // Manejar el cambio de filtro (todas, activas, completadas)
  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter);
    setFilterSelected(filter);
  };

  // Manejar la eliminación de todas las tareas completadas
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // Contar tareas activas y completadas
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  // Filtrar las tareas según el filtro seleccionado
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  // Manejar la adición de una nueva tarea
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    // Guardar las tareas actualizadas en localStorage
    localStorage.setItem('todos', JSON.stringify(newTodos))
  };

  return (
    <div className="todoapp">
      <Routes>
        <Route path="/" element={<Landing buttonText="Ingresar" buttonLink="/home" />} />
        <Route path="/home" element={
          <React.Fragment>
            <Header onAddTodo={handleAddTodo} />
            <h1 style={{ fontSize: "35px", color: "#3498db", marginTop: "50px" }}>
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
          </React.Fragment>
        } />
      </Routes>
    </div>
  );
};

export default App;







/* import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Landing } from "./components/Landing/Landing";
import { TODO_FILTERS } from "./consts";
import { type TodoId, TodoCompleted, FilterValue, TodoTitle } from "./types";
import Swal from "sweetalert2";

const mockTodos = [
  {
    id: "1",
    title: "Tarea 1",
    completed: false,
  },
  {
    id: "2",
    title: "Tarea 2",
    completed: false,
  },
  {
    id: "3",
    title: "Tarea 3",
    completed: false,
  },

];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  useEffect(() => {
    const storageTodos = localStorage.getItem('todos')
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos))
      
    }
  }, [])

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
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
    localStorage.setItem('todos', JSON.stringify(updatedTodos))

    if (completed) {
      Swal.fire({
        title: 'TAREA COMPLETA',
        text: '¡Sigue adelante! ✅',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    }
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
    localStorage.setItem('todos', JSON.stringify(newTodos))
  };


  return (
    <div className="todoapp">
      <Routes>
        <Route path="/" element={<Landing buttonText="Ingresar" buttonLink="/home" />} />
        <Route path="/home" element={
          <React.Fragment>
            <Header onAddTodo={handleAddTodo} />
            <h1 style={{ fontSize: "35px", color: "#3498db", marginTop: "50px" }}>
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
          </React.Fragment>
        } />
      </Routes>
    </div>
  );
};

export default App;

 */
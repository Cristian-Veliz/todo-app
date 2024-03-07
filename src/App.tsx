import {useState} from 'react';
import {Todos} from './components/Todos';
import { type TodoId, type Todo as TodoType, TodoCompleted} from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Reunión con el equipo de dasarrollo',
    completed: true,
    
  },
  {
    id: '2',
    title: 'Ir al correo',
    completed: true,
  },
  {
    id: '3',
    title: 'Aprender TypeScript ',
    completed: false,
  }
]


const App = (): JSX.Element => {
 const [todos, setTodos] = useState(mockTodos)

 //uso parametros nombrados    
const handleRemove = ({id}: TodoId): void => {
const newTodos = todos.filter(todo => todo.id !== id)
setTodos(newTodos)
}

const handleCompleted = ({ id, completed }: { id: TodoId; completed: TodoCompleted }): void => {
  const updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed };
    }
    return todo;
  });

  setTodos(updatedTodos);
};

  return (
    <div className='todoapp'>
      <h1 style={{ fontSize: '35px', color: '#3498db', marginTop: '50px' }}>
       Todo-App 🚀
      </h1>

    <Todos 
        onRemoveTodo={handleRemove}
        todos={todos} 
        onToggleCompleteTodo={handleCompleted}
        />
    </div>
  ) 
}

export default App;

 
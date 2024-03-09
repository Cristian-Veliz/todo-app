import {useState} from 'react';
import {Todos} from './components/Todos';
import { type TodoId, type Todo as TodoType, TodoCompleted} from './types';

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
      Organiza tu Día con Todo-App 🚀
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

 
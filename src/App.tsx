import {useState} from 'react';
import {Todos} from './components/Todos';
import { type TodoId, type TodoType } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Reunión con',
    completed: true,
    
  },
  {
    id: '2',
    title: 'Ir al correo',
    completed: true,
  },
  {
    id: '3',
    title: 'Aprender React con TypeScript ',
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

const handleCompleted = ({id, completed}: Pick<TodoType, 'id'| 'completed'>): void => {

}
  return (
    <div className='todoapp'>
      <h1 style={{ fontSize: '35px', color: '#3498db', marginTop: '50px' }}>
       Todo-App 🚀
      </h1>

    <Todos 
    onRemoveTodo={handleRemove}
    todos={todos}/>
    </div>
  ) 
}

export default App;

 
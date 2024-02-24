import {useState} from 'react';
import {Todos} from './components/Todos';

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
    title: 'LLamar a oficina',
    completed: false,
  }
]


const App = (): JSX.Element => {
 const [todos] = useState(mockTodos)
  return (
    <div className='todoapp'>
      <h1 style={{ fontSize: '35px', color: '#3498db', marginTop: '50px' }}>
       Todo-App 🚀
      </h1>

    <Todos todos={todos}/>
    </div>
  )
}

export default App;

 
import {useState} from 'react';
import {Todos} from './components/Todos';

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
    
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  }
]


const App = (): JSX.Element => {
 const [todos] = useState(mockTodos)
  return (
    <div>
      <h1>HOLAA TODO-APP</h1>

    <Todos todos={todos}/>
    </div>
  )
}

export default App;

 
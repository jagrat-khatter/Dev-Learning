import { useState, useEffect } from 'react'; 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodos} from './CreateTodos.jsx'
import {Todos} from './Todos.jsx'

function App() {
  const [todos, setTodos] = useState([]);
  
  
//   fetch('http://localhost:3000/todos').then(async function(res)
// {
//   const final = await res.json();
//   setTodos(final);
// })
  useEffect(() => { // Use useEffect for async operations
    async function fetchData() {
        try {
            const res = await fetch('http://localhost:3000/todos');
            const final = await res.json();
            setTodos(final);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData(); // Call the async function
}, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <CreateTodos></CreateTodos>      
      <Todos todos={todos["todos"]}></Todos>                          
    </div>
  )
}

export default App

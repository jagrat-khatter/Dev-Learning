import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
// Write a component that takes a todo id as input and fetches the data for that todo from the given endpoint and then renders it 
function App() {
  const [todo, setTodo] = useState(null)
  const [id , setId] = useState(null)
  useEffect(() =>{
    try{ async function load() {
      
      const response = await fetch(`https://cf40cdde-70e8-4136-adff-977e42aed585-00-1wni6ghrrrb44.sisko.replit.dev/todo?id=${id}`,{method: "GET" , headers: {
        'Content-Type': 'application/json',
      }});
      const final = await response.json();
      setTodo(final["todos"]);
    }
    if(id) load();
    }
    catch(err)
    {
      console.log(`There is some erroe ${err}`)
    }
  } , [id]) // dependency array expects stateVariables
  
  return (<>
    <input type="text" placeholder="Enter todo id" style={{padding:10 , margin:10}} onChange={updateId} />
    <Todo todo={todo}></Todo>
    </>
  )
  function updateId(e)
  {
    setId(e.target.value);
  }
  
  function Todo({todo}){
    if(!todo) return <></>;
      return (
        <>
        <h1>{todo.title}</h1>
        <div>{todo.description}</div>
        </>
      )
    
  }

}

export default App

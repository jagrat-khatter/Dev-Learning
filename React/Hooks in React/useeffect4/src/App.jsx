import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [id , setId] = useState(null)
  const [todo , setTodo] = useState(null)
  useEffect(()=>{
    
    if(id != null)
    {
      async function load(){
        const response =await  fetch(`https://cf40cdde-70e8-4136-adff-977e42aed585-00-1wni6ghrrrb44.sisko.replit.dev/todo?id=${id}` ,{method : 'GET' , 
          headers :{ 'Content-Type': 'application/json',}
        })

        const final = await response.json();
        setTodo(final["todos"]);
      }
      load();
    }
  } , [id])

  // if you want to pass arguments in Onclick you have to use these arrow type syntax
  return(<>
    <button onClick={()=>updateId(1)} >1</button>
    <button onClick={()=>updateId(2)} >2</button>
    <button onClick={()=>updateId(3)} >3</button>
    <button onClick={()=>updateId(4)} >4</button> 
    <Todo todo={todo}></Todo>
  </>);

  function updateId(newId){
    setId(newId);
  }
  function Todo(props){
    console.log("constro");
    if(!todo) return <></>;
    
    return (<>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.description}</p>
    </>)
  }
}

export default App
// The Todo component renders twice:
// First, when the id changes, but before the todo state is updated.
// Second, when the todo state is updated after the fetch completes.

// By similar logic each button also renders twice
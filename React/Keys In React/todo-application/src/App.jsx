import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Create a todo app that renders 3 todos
// Create a todo component that accepts title, description as input
// Initialize a state array that has 3 todos
// Iterate over the array to render all the TODOs
// A button in the top level App component to add a new TODO
function App()
{
  let globalId=0;
  const [array , setArray] = useState([])
  const [description , setDescription] = useState("");
  const [title , setTitle] = useState("");
  const TodoList = React.memo(function TodoList(props)
  {
      const final = props.array.map(function(arr)
    {
      return(
        <div key={arr.id}>
         <h2>{arr.title}</h2>
         <p>{arr.description}</p>
        </div>

      )
    })
    return (
      <>{final}</>
    )
  })
    return (
    <>
    <input placeholder="title" value={title} onChange={titInput} style={{margin:10 , padding :10}}></input><br/>
    <input placeholder="descriptin" value={description} onChange={desInput} style={{margin:10 , padding :10}}></input><br/>
    <button onClick={addTodo} style={{margin:10 , padding :10}}>Add Todo</button><br/>
    <TodoList array={array} style={{margin:10 , padding :10}}></TodoList>
    </>
   )
   function titInput(e)
   {
      setTitle(e.target.value);
   }
   function desInput(e){
     setDescription(e.target.value);
   }   
  function addTodo()
  {
    const newTodo={
      id : globalId++ ,
      title : title ,
      description : description
    }
    setArray([...array , newTodo]);
  }
  
}

// Whenever you dynamically render a list of elements using .map() or a similar iteration method, 
// you MUST provide a unique key prop to each rendered element.
export default App

import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    try {
      async function load()
      {
        const response = await fetch('https://cf40cdde-70e8-4136-adff-977e42aed585-00-1wni6ghrrrb44.sisko.replit.dev/todos')
        const final = await response.json();
        setTodos(final.todos);
      }

      load() ;
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  } , [])
  
  if(!todos) return(
    <div>Loading Todos</div>
  )
  return(
    <>
    {todos.map((todo ,index )=> <Todo title={todo.title} description={todo.description} key={index}/>)}
    </>
  )
  function Todo(props){
    return (<div>
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    </div>)
  }

  // return (
  //   <>
  //   <Todo todos={todos}></Todo>
  //   </>
  // )

  // function Todo({todos})
  // {
  //   return (
  //     todos.map((arr , index) => { // returning an array of todos 
  //     return(
  //       <div key={index}>
  //       <h2>{arr.title}</h2>
  //       <div>{arr.description}</div>
  //       </div>
  //     )})
  //   )
  // }
}

export default App


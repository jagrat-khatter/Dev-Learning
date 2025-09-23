import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface TodoProps{
  todos: string[]
  num : number
}

function App() {
  const [todos, setTodos] = useState(["Go to gym" , "Go to park"  , "Clean you Room"])


  return (
    <>
      <Todos todos={todos } num={13} />
    </>
  )
}
// ******** VERY IMPORTANt
// the TodoProps is inteface of whole prop where todos is a key we have only destructured todos 
// taht is our choice but the props that you are passing from fuctional components shoudl be 
// in the interface 
function Todos({todos} : TodoProps ){
  return <div>
    {todos.map((x)=><div>{x}</div>)}
  </div>
}

export default App

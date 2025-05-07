import { useState } from 'react'


function App()
{
  // TODO Application
  //
  // {
  //     todos : [{title}:"todo1" , desciption:"This is todo1" , completed : false]
  // }
  const [todos , setTodos]= useState([
    {title: "Go to gym" , description: "Go to gym from 6-7" , completed: false} , 
    {title: "Study DSA" , description:"Complete topic sliding window" , completed : true}
  ])
  function Todo(props) {
      return (
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>Completed : {props.completed ? "Yes" :"No"}</p>
        </div>
      )
  }// when a parent re-renders then all its child re-render as well 
  // if the props are part of the state variable and if anything changes in state varaiable then components using props will also get re-rendered 
  function addRandomTodo()
  {
      const newTodo = [...todos , {
        title : "This is Random Todo" ,
        description : "Some dummy data" ,
        completed : true
      }] ;
      setTodos(newTodo);
  }
  function DarkNewTodos(props) // this function needs to return a div 
  {
    // response is an array so it should be returned in {}
    const response = props.todos.map(function(todo , index){ // map function returns an array of these objects 
      return (
        <div key={index}>
        <h3>{todo.title} </h3>
        <p>{ todo.description} ,</p>
        <p>completed : {todo.completed ? "yes" : "No"} </p>
        </div>
    );
    });
        // so the elements in react should be jsx elements only 
      return (<div style={{color:"white" , background:"black"}}>
        {response} 
      </div>)
  }

  return (
    <div>
    <button onClick={addRandomTodo}> Add Random Todo</button>
    <div>
      {// curly braces bcoz we are returning a JS thing
          todos.map(function(todo , index){
            return <Todo key={index} title={todo.title} description={todo.description}> </Todo> // Todo is a function component
          })// if anything changes in state variable that are passed then the component will rerender
      }
    </div>
    <DarkNewTodos todos={todos}></DarkNewTodos>

    </div>
  )
  
}

export default App

import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState(null)
  const [clock, setClock] = useState(1)
  let globalId=0;
  useEffect(function(){
    async function fetchTodos(){const response = await fetch("https://cf40cdde-70e8-4136-adff-977e42aed585-00-1wni6ghrrrb44.sisko.replit.dev/todos");
    const final = await response.json(); // converting the JSON string to JS object
    setTodos(final);}

    fetchTodos();
  } , [clock])

  setTimeout(() => {
    setClock(clock + 1);
  }, 5000);
  // useEffect(function(){

  //   setInterval(async function fetchTodos(){const response = await fetch("https://cf40cdde-70e8-4136-adff-977e42aed585-00-1wni6ghrrrb44.sisko.replit.dev/todos");
  //     const final = await response.json();
  //     setTodos(final);
  //   }, 5000);

  // } , [])

  if(!todos) return(<div>Loading Todos...</div>);
  return (
    <> 
    <List array={todos["todos"]}></List> 
    </> 
  )
  function List({array}) // we have done destructuring but you can also use prop.array
  {
    const final = array.map(function(arr)
    {
      return(
        <div key={globalId++}>
        <h2>{arr.title}</h2>
        <p>{arr.description}</p>
        </div>
      )
    })
    return (<>{final}</>);
  }
}

export default App
// App() runs
//todos is null, so the component returns: Loading Todos
//useEffect kicks in after initial render
//It calls fetchTodos() asynchronously.
//fetchTodos() fetches data from the API and sets todos using setTodos.
//Re-render Triggered because of setTodos() // so no re-rendering happens until the api is fethed the first time

// App() Function Execution: When your App component runs for the first time:
// //***************** 
// useEffect runs after React has finished rendering the component to the DOM. This is true regardless of where you place 
// the useEffect call within your functional component's body.

// State variables (todos, clock) are initialized.
// let globalId = 0; is executed.
// The setTimeout call is encountered and executed. This schedules the callback function (which updates the clock state) 
// to run after a 5000ms delay. This scheduling happens synchronously during the initial execution of App().

// The if(!todos) condition is checked (it's true).
// The return statement is reached, and React starts the process of rendering the "Loading Todos..." message to the DOM. 
// The actual DOM update happens after the App() function has finished executing.

// The useEffect hook is encountered and its effect function is scheduled to run after the initial DOM update.
// Initial DOM Display: The browser will render the "Loading Todos..." message based on the initial return statement.

// useEffect Execution (After Initial Display): After the initial DOM is displayed, React will execute the effect function inside useEffect, 
// which will start fetching the todos data.

// setTimeout Callback (After Delay): After 5000ms have passed from the initial call to setTimeout, its callback function () => 
// { setClock(clock + 1); } will be executed, updating the clock state and triggering a re-render of the App component.

// *** Code flow after clock state is changed 
// setTimeout Callback Executes: After the initial 5000ms delay (or any subsequent 5000ms intervals if setTimeout were somehow 
// re-scheduled, though in this code it's only scheduled once on initial mount), the callback function provided to setTimeout runs:

// This function updates the clock state. For example, if clock was 1, it will now become 2.

// Re-render of App Component: The call to setClock(clock + 1) triggers a re-render of the App component. React needs to update the 
// UI based on the new state value. The App() function will execute again.

// App() Function Executes (Second or Subsequent Time):

// todos will likely hold the data fetched in the previous useEffect execution (unless there was an error).
// clock will now have the updated value (e.g., 2).
// globalId will be reset to 0 for this render cycle.
// The if (!todos) condition will likely be false (assuming the initial fetch was successful), so the component will proceed 
// to the return statement and render the List component with the todos data.

// useEffect Hook Executes Again: After the App component has finished rendering (the virtual DOM has been updated and 
// potentially committed to the actual DOM), React checks the dependency array of the useEffect hook: [clock].

// The current value of clock (e.g., 2) is compared to its previous value (e.g., 1).
// Since the value has changed, React executes the effect function again:
// Re-render of App Component: The call to setClock(clock + 1) triggers a re-render of the App component. React needs to update the UI based on the new state value. The App() function will execute again.

// App() Function Executes (Second or Subsequent Time):

// todos will likely hold the data fetched in the previous useEffect execution (unless there was an error).
// clock will now have the updated value (e.g., 2).
// globalId will be reset to 0 for this render cycle.
// The if (!todos) condition will likely be false (assuming the initial fetch was successful), so the component will proceed to the return statement and render the List component with the todos data.
// useEffect Hook Executes Again: After the App component has finished rendering (the virtual DOM has been updated and potentially committed to the actual DOM), React checks the dependency array of the useEffect hook: [clock].

// The current value of clock (e.g., 2) is compared to its previous value (e.g., 1).
// Since the value has changed, React executes the effect function again:

// *** Imp Point : When setTodos changes the state of todos the App() is rerendered he useEffect hook's callback function will only 
//  be executed if the values in its dependency array ([clock]) have changed since the last render.

//  Since the clock state remains 1 during the re-render caused by the todos update, the useEffect hook does not run again at that point. 
//  Only the DOM is updated to reflect the new todos data.

// But when callback happens through setTimeout then useEffect is executed after rendering the previous state of todos







// ******* When setInterval is used inside useEffect
// useEffect with [] runs only on the initial mount: You are correct. When the component is first rendered and added to the DOM, 
// the useEffect hook with an empty dependency array ([]) executes its effect function once.
//
// setInterval sets up a persistent timer: The setInterval function, provided by the browser's Web APIs, creates a timer that is 
// independent of the React component's lifecycle after it's been set up. It schedules the fetchTodos function to be executed
// repeatedly at the specified interval (5000ms).

// Re-renders create new executions of the App function: When the fetchTodos function eventually calls setTodos, it causes
// the App component to re-render. This means the App() function runs again from the top.

// The useEffect with [] is not executed again on subsequent re-renders: Because the dependency array [] is empty, React 
// knows that this effect should only run after the very first render. Subsequent re-renders of the App component do not trigger
//  this useEffect to run again.

// The setInterval timer remains active: The timer created by setInterval in the initial useEffect continues to run in the 
// background, independently of the re-renders. It doesn't automatically stop just because the component re-renders. Each time 
// the timer fires, it executes the fetchTodos function, which in turn updates the state and causes further re-renders.
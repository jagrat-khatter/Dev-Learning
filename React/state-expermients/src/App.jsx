import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This is prop drilling
// **Prop drilling** occurs when you need to pass data from a higher-level component down to a 
// lower-level component that is several layers deep in the component tree. This often leads to the following issues:

// - **Complexity:** You may have to pass props through many intermediate components that don’t 
// use the props themselves, just to get them to the component that needs them.
// - **Maintenance:** It can make the code harder to maintain, as changes in the props structure 
// require updates in multiple components.
function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(false);

  return (<>
  <Light state={state} setState={setState} />
  </>)

  function Light({state , setState}){
  
    return (<>
    <LightBulb state={state} />
    <LightSwitch setState={setState} />
    </>)
}
  function LightBulb({state}){
    
    return <div>{state ? "Bulb On" : "Bulb Off"}</div>
  }
  function LightSwitch({setState}){

    function toggle(){
    setState(current => !current) // you don't need access to state here
    // this is functional form of setState it can access current value of state 
    }

    return <>
    <button onClick={toggle}>Switch</button>
    </>
  }

}

export default App


// ******* Rolling up the state, unoptimal re-renders ***********

// function App() {
//   const [count, setCount] = useState(0)

//   return (<>
//   <Light />
//   </>)

//   function Light(){
//     const [state,setState] = useState(false);

//     return (<>
//     <LightBulb state={state} />
//     <LightSwitch setState={setState} />
//     </>)
// }
//   function LightBulb({state}){
    
//     return <div>{state ? "Bulb On" : "Bulb Off"}</div>
//   }
//   function LightSwitch({setState}){

//     function toggle(){
//     setState(current => !current) // you don't need access to state here
//     // this is functional form of setState it can access current value of state 
//     }

//     return <>
//     <button onClick={toggle}>Switch</button>
//     </>
//   }

// }

// Problems : If something happens to the state variables above the chain it will create re-renders
// then these state variable will be again initiated in the lower chain

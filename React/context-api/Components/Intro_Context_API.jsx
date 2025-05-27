import { useState  , createContext , useContext} from 'react'



const BulbContext =  createContext();

function BulbContextProvider({children}){ 
  const [state, setState] = useState(false);
  return (
    <BulbContext.Provider value={{state : state , setState : setState , name : "Jagrat"}}>
      {children} 
    </BulbContext.Provider>
  )

}

export function App1() {
  const [count, setCount] = useState(0)
  

  return (<>
    <BulbContextProvider>
    <Light />
    </BulbContextProvider>
  </>)

  function Light(){
    
    return (<>
    <LightBulb />
    <LightSwitch />
    </>)
}
  function LightBulb(){
    const {state} = useContext(BulbContext);
    return <div>{state ? "Bulb On" : "Bulb Off"}</div>
  }
  function LightSwitch(){
    const {setState} = useContext(BulbContext);
    function toggle(){
    setState(current => !current) // you don't need access to state here
    // this is functional form of setState it can access current value of state 
    }

    return <>
    <button onClick={toggle}>Switch</button>
    </>
  }
}



// ***** Initial  Crude Approach *********

// function App() {
//   const [count, setCount] = useState(0)
//   const [state, setState] = useState(false);

//   const BulbContext  = createContext();

//   return (<>
//     <BulbContext.Provider value={{
//       state : state,
//       setState : setState,
//       name : 'jagrat'
//     }}>
//     <Light />
//     </BulbContext.Provider>
//   </>)

//   function Light(){
    
//     return (<>
//     <LightBulb />
//     <LightSwitch />
//     </>)
// }
//   function LightBulb(){
//     const {state} = useContext(BulbContext);
//     return <div>{state ? "Bulb On" : "Bulb Off"}</div>
//   }
//   function LightSwitch(){
//     const {setState} = useContext(BulbContext);
//     function toggle(){
//     setState(current => !current) // you don't need access to state here
//     // this is functional form of setState it can access current value of state 
//     }

//     return <>
//     <button onClick={toggle}>Switch</button>
//     </>
//   }
// }

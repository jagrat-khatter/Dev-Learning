import React , {useState , useEffect , createContext , useContext} from 'react'

function APP(){
    const context1 = createContext();
    
    // children is prop which is sent automatically by ContextProvider and we are doing 
    // object destructuring 
    function ContextProvider({children}){ 
        const [count , setCount] = useState(0);

        // in this value ={{}} first {} is for embedding js inside jsx
        // second {} is for creating a javascript object
        return (<context1.Provider value={{count : count , setCount: setCount}}>
            {children} 
        </context1.Provider>)
    }
    
    // Even if no children of contextProvider uses useContext but due to some reason contextProvider 
    // re-renders due to change in state variable then all the children will be re-rendered

    // contextProvider will re-render when any of the state variable 
    // This contextProvider when re-renders will trigger re-rendering of all its children 
    return(<>
    <ContextProvider>
        <Counter />
    </ContextProvider>
    </>)

    function Counter(){

        return (<>
        <CurrentCount />
        <Decrease />
        <Increase />
        <div>Component without using useContext</div>
        </>)
    }
    function CurrentCount(){
        const {count} = useContext(context1)

        return (<div>{count}</div>)
    }

    function Decrease(){
        const {setCount} = useContext(context1)

        return <div><button onClick={()=>{setCount(c => c-1)}}>Decrease</button></div>
    }
    function Increase(){
        const {setCount} = useContext(context1)
        return <div><button onClick={()=>{setCount(c => c+1)}}>Increase</button></div>
    }
}

export default APP
// When the context value changes, all components that use useContext(context1) will re-render.

// A component only re-renders due to context if it (or one of its children) uses useContext 
// to consume that context.

// In your code, Counter does not directly use useContext, but its children 
// (CurrentCount, Increase, Decrease) do.

// Now two different things will be told to you next 
// When the context value changes, all components that use useContext(context1) will re-render.

// But: If a parent component (like Counter) is re-rendered by React because its parent 
// (ContextProvider) re-renders (which happens when context changes), then all of its 
// children—including <div>Component without using useContext</div>—will also re-render, 
// even if they don't use context.

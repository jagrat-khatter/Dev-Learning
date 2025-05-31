
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
// If a component uses useContext(context1), it will re-render when that context value changes — 
// no matter where it appears in the component tree.

// A component will re-render due to context change only if it itself uses the context via 
// useContext(context1) (or context1.Consumer in class components).
// Children that use context will re-render independently, even if the parent doesn't.

// When context value changes, Context.Provider re-renders, but it does not automatically 
// re-render all its children.

// Only those components that use the context value (useContext(context1)) will re-render.

// Other components will not re-render unless:

// They receive new props, or

// Their state changes, or

// Their own parent re-renders due to other causes (not context propagation).

// They use some context and even a single property in that context is changed
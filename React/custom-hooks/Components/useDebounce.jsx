import React , {useState , useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

let intendedDelay = 2000;
function APP(){
    const [input , setInput ] = useState("");

    const  callBackend = useCallback(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1");
        // We can also maintain an input state var. which is to be set with this fetch call
        // But change in this input variable will not change the deBouncedFn logic
        // that will only change when either this call_Backend function changes or 
        // intendedDelay changes
    } , [input])// you may think there is only input state var. that will cause re-render
    // so why useCallback but generally good practice too protect from other state variables

    const deBouncedFn = useDebounce(callBackend , intendedDelay)
    // This expects a new deBounced function evertime we give him different callBackend
    // and intended delay which will debounce 

    return (<>
    <input type="text" onChange={deBouncedFn}></input>
    </>)

}

export default APP
import React , {useEffect , useState , useRef} from 'react'

function usePrev(value){
    const ref = useRef();// this reference persists throughout 

    useEffect(()=>{
        ref.current = value;
    }, [value])

    return ref.current;
    // the return from your hook/component happens before any useEffect runs.
    // After the render is committed to the DOM, React runs all useEffect callbacks.
    // when the render happens for the first time ref.current is null
}

export default usePrev
import React , {useEffect , useState , useRef ,useCallback} from 'react'

function useDebounce(callBackFn , delay){
    const currentClock = useRef();

    const deBouncedFn = useCallback(()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(callBackFn , delay)

    } , [callBackFn , delay])

    return deBouncedFn; // This hooks returns a debounce function customized for a given 
    // function call and delay this deBounced function will only change if 
}

export default useDebounce
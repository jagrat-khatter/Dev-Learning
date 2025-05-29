import React , {useState , useEffect , useRef} from 'react'
import usePrev from '../hooks/usePrev'



function APP()
{
    const [state , setState] = useState(0);
    const prev = usePrev(state);

    return (
        <>
        <div>{state}</div>
        <button onClick={()=>{
            setState(c => c+1)
        }}>Click Me</button>
        <div>Previous state is {prev}</div>
        </>
    )
}


export default APP



//******************IMPLEMENTATION without using custom-hooks
// import React , {useState , useEffect , useRef} from 'react'



// function APP()
// {
//     const [state , setState] = useState(0);
//     //const prev = usePrev(state);

//     const ref = useRef();
//     useEffect(()=>{
//         ref.current = state;
//     } , [state])

//     return (
//         <>
//         <div>{state}</div>
//         <button onClick={()=>{
//             setState(c => c+1)
//         }}>Click Me</button>
//         <div>Previous state is {ref.current}</div>
//         </>
//     )
// }

// export default APP
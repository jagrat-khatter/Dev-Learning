import React , {useState} from 'react'

function useCounter(){
    const [count , setCount] = useState(0);

    function increaseCount(){
        setCount(c => c+1)
    }

    return {
        count : count,
        increaseCount : increaseCount
    }
}
function APP(){
    const {count , increaseCount} = useCounter();

    return (
        <>
        <div>{count}</div>
        <button onClick={increaseCount}>Add</button>
        </>
    )

}

export default APP

// *********** Method 1 ***********
// function APP(){
//     const [count , setCount] = useState(0)
//     function increaseCount(){
//         setCount(current => current +1);
//     }

//     return (
//         <>
//         <div>{count}</div>
//         <button onClick={increaseCount}>Add</button>
//         </>
//     )

// }
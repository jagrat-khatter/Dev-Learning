import React , {useEffect , useState} from 'react'
import {RecoilRoot , useRecoilValue , useSetRecoilState} from 'recoil'
import {counterAtom} from '../src/store/atoms/counter'
import {evenSelector} from '../src/store/selectors/counter'
// we are using {} of syntax bcoz of named export 

// here we'll use bith selector and atoms
// they are in src/store/(selector or atoms) file named as counter.js
function APP()
{
    return(<>
    <RecoilRoot>
        <Counter />
        <Buttons />
        <IsEven />
    </RecoilRoot>
    
    </>)

    function Counter()
    {
        const count = useRecoilValue(counterAtom);
        return <div>{count}</div>
    }
    function Buttons()
    {
        const setCount = useSetRecoilState(counterAtom);

        return (<>
        <button onClick={()=>{setCount(c=>c+2)}}>Increase</button>
        <button onClick={()=>{setCount(c=>c-1)}}>Decrease</button>
        </>)
    }
    function IsEven()
    {// evenSelector will only return value to this even function if value of evenSelector changes
        // we can understand it as this function will only re-render when evenSelector value changes
        //and when this function re-renders then even(const) will have new value
        const even = useRecoilValue(evenSelector)
        
        return <div>{even ? "Even" : "Odd"}</div>
    }



}

export default APP
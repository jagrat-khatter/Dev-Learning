import React , {useState , useEffect } from 'react'
import {RecoilRoot , useSetRecoilState , useRecoilValue} from 'recoil'
import {counterAtom} from '../src/store/atoms/counter'

function APP(){


    return(<>
    <RecoilRoot>
        <Counter />
    </RecoilRoot>
    </>)

    function Counter(){

        return (<>
        <CurrentCount />
        <Decrease />
        <Increase />
        </>)
    }
    function CurrentCount(){
        const count = useRecoilValue(counterAtom)

        return (<div>{count}</div>)
    }

    function Decrease(){
        const setCount = useSetRecoilState(counterAtom)

        return <div><button onClick={()=>{setCount(c => c-1)}}>Decrease</button></div>
    }
    function Increase(){
        const setCount = useSetRecoilState(counterAtom)
        return <div><button onClick={()=>{setCount(c => c+1)}}>Increase</button></div>
    }
}

export default APP
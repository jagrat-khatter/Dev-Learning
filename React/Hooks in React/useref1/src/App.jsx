import { useState , useCallback,useEffect,useMemo,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(16)
  const Ref1 = useRef();
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     document.getElementById("counterComponent").innerHTML = 287;
  //   } , 5000)
  // } , [])
  // return (
  //   <>
  //    <div id="counterComponent">At present count is {count}</div>
  //   </>
  // )
  useEffect(()=>{
    setTimeout(()=>{
      Ref1.current.innerHTML = 10;
    } , 5000)
  } , [])
  return (
    <> 
    <div ref={Ref1}>At present count is {count}</div>
    </>
  )
}

export default App

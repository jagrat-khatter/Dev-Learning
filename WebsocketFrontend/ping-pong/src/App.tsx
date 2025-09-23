import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// As soon as you have access to the WebSocket instance (ws), you can register event handlers 
// like onmessage from anywhere in your code. 
function App() {
  const [count, setCount] = useState(0)
  const [socket , setSocket] = useState();
  const inputRef = useRef(null);



  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    // @ts-ignore
    setSocket(ws);
    // The ws.onmessage handler is set up inside useEffect, which runs once when your component 
    // mounts. This means the handler is registered and will listen for incoming messages for the
    // lifetime of the component.
    
    ws.onmessage = (e)=>{
      alert(e.data)
    }
  } , [])
  const sendMessage = ()=>{
    // @ts-ignore
    socket.send(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} placeholder='Message' type='text'></input>

      <button onClick={sendMessage} className="myButton"></button>
    </>
  )
}

export default App

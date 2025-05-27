import {useState , useRef , useCallback} from "react";
let state = {
  count : 0
}
function App()
{
  const [count , setCount] = useState(0);
  
  const timer = useRef(null);

  const startClock = useCallback(() =>
  {
      if(timer.current === null){
        timer.current = setInterval(()=> {
          setCount(c => c+1);
        } , 1000)
      }
  })
  function stopClock()
  {
    if(timer.current !== null){
      clearInterval(timer.current);
      timer.current= null;
    }
  }

  return (
    <>
    <div>{count}</div>
    <button className="myButton" onClick={startClock}>Start</button>
    <button className="myButton" onClick={stopClock}>Stop</button>
    </>
  )
  
}

export default App

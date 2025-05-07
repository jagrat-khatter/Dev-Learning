import {useState} from "react";
let state = {
  count : 0
}
function App()
{
  const [count , setCount] = useState(0);
  
  return (
    <CustomButton count={count} setCount={setCount}></CustomButton>// this is providing all the things needed in the componenet
  )

  function CustomButton(props)
  {
    function onClickHandler()
    {
        props.setCount(props.count+1);
    }
    return (
      <button onClick={onClickHandler}>Counter {count}</button>
    )

  }
}

export default App

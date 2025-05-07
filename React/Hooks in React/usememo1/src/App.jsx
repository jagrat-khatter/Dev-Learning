import { useState ,useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)
//   const [sum , setSum] = useState(null)

//   return(
//     <>
//     <input onChange={findSum} placeholder="Enter a number" type="text"></input>
//     <div>{`Sum is ${sum}`}</div>
//     <button onClick={update}>{`Counter ${count}`}</button>
//     </>
//   )
//   function update(){
//     setCount(count+1);
//   }
  
//   function findSum(e){
//     const n = parseInt(e.target.value);

//     setSum(n*(n+1) /2);
//   }

// you should use usememo bcoz sometimes you have to create extra state variable in useEffect 
// that will trigger two re-renders so it is better to use useMemo in case of computational task

const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // Memoize the sum calculation
  const sum = useMemo(() => {
    console.log('Computing sum...');
    return number * (number + 1) / 2;
  }, [number]); // Recompute only when `number` changes

  return (
    <>
      <input
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        placeholder="Enter a number"
        type="text"
      />
      <div>{`Sum is ${sum}`}</div>
      <button onClick={() => setCount(count + 1)}>{`Counter ${count}`}</button>
    </>
  );
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from '../Components/useCounter_hook' // actual function used was APP 
// but in this we'll be referring each components as App1 , App2, App3 // only one thing is 
// exported fromthat file so we can call it whatever we want in this file 
import App2 from '../Components/useFetch'
import App3 from '../Components/GenruseFetch'
import App4 from '../Components/GenericRe-Fetch'
import App5 from '../Components/use-Prev'
import App6 from '../Components/useDebounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    <App6 />
    </>
  )
}

export default App

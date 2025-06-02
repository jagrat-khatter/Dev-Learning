import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import App1 from '../Components/Recoil1'
import App2 from '../Components/Recoil2'
import App3 from '../Components/Recoil3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  {/* <App1 /> */}
  {/* <App2 /> */}
  <App3 />
  </>)
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import App1 from '../Components/Recoil1'
import App2 from '../Components/Recoil2'
import App3 from '../Components/Recoil3'
import App4 from '../Components/Recoil4'
import App5 from '../Components/Recoil5'
import App6 from '../Components/Recoil6'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  {/* <App1 /> */}
  {/* <App2 /> */}
  <App3 />
  {/* <App4 /> */}
  {/* <App5 /> */}
  {/* <App6 /> */}
  </>)
}

export default App

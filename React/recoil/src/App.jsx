import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from "../Components/Context_API_Problem"
import App2 from '../Components/Recoil_1'
import App3 from '../Components/Memo_with_Context_API'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  {/* <App1 /> */}
  {/* <App2 /> */}
  <App3 />
  </>)
}

export default App

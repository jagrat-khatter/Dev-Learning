import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {SidebarClass1} from './components/SidebarClass1'
import {Sidebar2Transition} from './components/Sidebar2Transition'
import {DarkModePage} from './components/DarkMode'
import LandingPage from './assignment_components/AsgnmtPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    {/* <SidebarClass1 /> */}
    {/* <Sidebar2Transition /> */}
    {/* <DarkModePage /> */}
    <LandingPage />
    </>
  )
}

export default App

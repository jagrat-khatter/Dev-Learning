import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import App1 from './components/flex.jsx'
import App2 from './components/grids.jsx'
import App3 from './components/responsive1.jsx'
import App4 from './components/responsive2.jsx'
import App5 from './components/landing_page.jsx'
import App6 from './components/otp.jsx'

import './App.css'

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

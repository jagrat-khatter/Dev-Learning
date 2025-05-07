import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <button onClick={() => setCount(Math.random())}>
          count is {count}
        </button>

        {/* can be replaced by onClick={function()
        {
          setCount(function(count) {
            return count + 1;
          })
        }   } */}

      </div>
  )
}

export default App

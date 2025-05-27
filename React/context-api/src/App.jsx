import { useState  , createContext , useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {App1} from '../Components/Intro_Context_API'  // if i have done named export
// if you are doing default export use import App1 from '../'

import App2 from '../Components/Experiment1_ContextAPI'
import App3 from '../Components/Intro_to_recoil'
function App(){
    return(
      <>
      {/* <App1 /> */}
      {/* <App2 /> */}
      <App3 />
      </>
    )
}

export default App;

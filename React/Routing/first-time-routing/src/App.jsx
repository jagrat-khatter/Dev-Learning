import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter , Routes , Route , Link , useNavigate} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
    <BrowserRouter>
    <div><Link to="/">Allen</Link> || <Link to="/neet/class11">Class 11</Link> || <Link to="/neet/class12">Class 12 </Link> </div>
    <Routes>
      <Route path="/neet/class11" element={<Class11Program/>} />
      <Route path="/neet/class12" element={<Class12Program/>} />
      <Route path="/" element={<LandingPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
  function Class11Program(){
    return <>This is Class 11 Program</>
  }
  function Class12Program(){
    const nav1  = useNavigate(); // useNavigate is a hook function and nav1 is also a function 
    function HomePage(){
    nav1("/") ;
  }
    return <>This is Class 12 Program
    <button onClick={HomePage}>Return to Home Page</button></>
  }
  function LandingPage(){
    return <>This is landing page</>
  }
  function NotFoundPage(){
    return <>Content Not Found</>
  }
  
}

export default App
// Theorey :
// On using <a href=""></a> syntax itt was redering HTML te whole page again so we we not 
// benifitting from single page routing 
// Two components we can use for actual routing are Link and useNaviagate
// Use useNavigate instead of <Link> when you need to navigate programmatically in
// response to an event or logic, not just a user clicking a link.
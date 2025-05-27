import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter , Routes , Route , Link , useNavigate , Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/study" element={<Layout />}> 
        <Route path="study/neet/class11" element={<Class11Program/>} />
        <Route path="study/neet/class12" element={<Class12Program/>} />
        <Route path="study/" element={<LandingPage/>} />
        <Route path="*" element={<NotFoundPage />} />
        {/* If the URL starts with /study/ and does not match any of the defined child routes 
        Then <NotFoundPage /> will be rendered inside the layout. */}
      </Route>
     <Route path="/" element={<div>Hello</div>}/>
     <Route path="*" element={<div>Content not found</div>}></Route>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
  function Layout(){
    return <div style={{height : "100vh"}}>
      <div><Link to="/">Allen</Link> || <Link to="/neet/class11">Class 11</Link> || <Link to="/neet/class12">Class 12 </Link> </div>
      <Header />
      <div style={{height : "90vh" , backgrounf : "red"} }> <Outlet /></div>
      Footer
    </div>
  }
  function Header(){
    return <div>++++++++++HEADER+++++++++++=</div>
  }
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
// On using <a href=""></a> syntax it was redering HTML te whole page again so we we not 
// benifitting from single page routing 
// Two components we can use for actual routing are Link and useNaviagate
// Use useNavigate instead of <Link> when you need to navigate programmatically in
// response to an event or logic, not just a user clicking a link.


// <Outlet /> is a placeholder in your Layout component.
// When a nested (child) route matches, React Router will render the matched child route’s 
// component at the position of <Outlet /> inside the parent (Layout).

// <Outlet /> is meaningful only in components rendered by parent routes that have nested 
// child routes.
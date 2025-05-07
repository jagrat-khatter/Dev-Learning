import { useState }  from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // ************* Harder Way *********************************
  // return (
  //   <>
  //   <WrapperComponent InnerComponent={TextComponent}></WrapperComponent> // passing a function component inside the prop
  //   </>
  // )

  // function WrapperComponent({InnerComponent})
  // {// create a div which has border
  //   return (
  //     <div style={{border: "2px solid black" , padding: 20}}> <InnerComponent />  </div>
  //   )// Inner component is prop holding  a function component

  // }
  // function TextComponent()
  // {
  //   return (
  //     <div>
  //         Hi there
  //     </div>
  //   )
  // }
  // **********************************************************************

  //******************** Real Way ***************************
    return (
      <>
        <CardWrapper>
          Hi there
        </CardWrapper>
      </>
    )
    function CardWrapper({children}) // children is a special prop in React.
    {
      return(
        <div style={{border :"3px solid black"}}>{children}</div>
      )
    }// here you cannot use <children /> bcoz here children is a prop not prop holding a function component
  //*********************************************************************
}


export default App

import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

//   ***********     Part 1         ************** Original with higher number of renders

//   const [title , setTitle] = useState("I am going Australia") // here state is in Parent App so all the child of app will get rerendered once the tile is chnaged 
//   return (<>
//       <button onClick={titleChange}>Change the title</button>
//       <Header title={title}></Header>
//       <Header title="jagrat1"></Header>
//       <Header title="jagrat3"></Header>
//       <Header title="jagrat7"></Header>
//       <Header title="jagrat9"></Header>
//   </ >
//   )
//   function Header(props) // function component
//   {
//       return(
//         <div>{props.title}</div>
//       )
//   }
//   function titleChange() // actual js function 
//   {
//     setTitle(`I am going ${Math.random()}`);  // modern way to concatenate sting and variables , 
//     // can also use + to concatenate 
// }********************************************************

//   ***********     Part 2         ************** Somewhat less number of renders
    // return(
    //   <>
    //   <HeaderWithButton ></HeaderWithButton>
    //   <Header title="jagrat1"></Header>
    //   <Header title="jagrat3"></Header>
    //   <Header title="jagrat7"></Header>
    //   <Header title="jagrat9"></Header>
    //   </>
    // )
    // function HeaderWithButton(props) // function component
    // {            // here title is inside HeaderWithButton
    //   const [title , setTitle] = useState("I am going Australia")
    //     return(<>
    //     <button onClick={titleChange}>Change the title</button>
    //     <div>{title}</div>
    //     </>)

    //     function titleChange()
    //     {
    //       setTitle(`I am going ${Math.random()}`);
    //     }
    // }
    // function Header(props)// function component 
    // {
    //   return (<div>{props.title}</div>)
    // }
    // // In this the App component only re-renders once, it will not re-render when Button is clicked 
    // // because the App component no longer has any state variables that are being modified nowhere inside 
    // // the App parent title(state) is used 
    // ***********************************************************************

    //   ***********     Part 3         ************** Use memo 
    const[title , setTitle] =useState("I am going australia")
    const Header = React.memo(function Header(props)// the variable name Header is used as is usedin function components
    {
        return (<div>{props.title}</div>)
    })
    return (
      <>
      <button onClick={titleChange}>Change the title</button>
      <Header title={title}></Header>
      <Header title="jagrat1"></Header>
      <Header title="jagrat3"></Header>
      <Header title="jagrat7"></Header>
      <Header title="jagrat9"></Header>
      </>
    )

    
    function titleChange()
    {
        setTitle(`I am going ${Math.random()}`);
    }

 }
export default App
// App parent re-renders when title(state) is changed bcoz title is used inside it , then this triggers 
// the re-rendering of all its children whether necessary or not 
// Inside JSX, when you embed a JavaScript expression using curly braces {} and that expression
// evaluates to a number, React implicitly converts that number to a string during the rendering 
// process

import React , {useState , useRef} from 'react'
export function DarkModePage(){
    const containerRef = useRef();

    return (<>
    <div className={`bg-white h-screen dark:bg-darkBlue-600 dark:text-white`}>
     <div ref={containerRef}className='bg-white dark:bg-darkBlue-600 dark:text-white'>
        <button  onClick={()=>{
            containerRef.current.classList.toggle('dark');
        }}> Toggle theme</button>
     </div>
     
    </div>
    </>)
}  
// we are only toggling the class of button div so rest of the body stays in white only bcoz we have
// @custom-variant dark (&:where(.dark, .dark *)); did this means we want to toggle 
// we can choose the main html or body div to toggle 
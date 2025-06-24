import {useState} from 'react'


function APP(){


    return (<>
        <div className='grid grid-cols-12'>
            <div className='col-span-5' style={{background : "blue"}}>
                Hi there from Class1
            </div>
            <div className='col-span-5' style={{background : "red"}}>
                Hi there from Class2
            </div>
            <div className='col-span-2' style={{background : "green"}}> 
                Hi there from Class3
            </div>
            <div className='col-span-11' style={{background : "cyan"}}>Hi there </div>
        </div>

        <div className='grid grid-cols-24'>
            <div className='col-span-10' style={{background : "blue"}}>
                Hi there from Class1
            </div>
            <div className='col-span-10' style={{background : "red"}}>
                Hi there from Class2
            </div>
            <div className='col-span-4' style={{background : "green"}}> 
                Hi there from Class3
            </div>
        </div>
        </>
    )
}

export default APP
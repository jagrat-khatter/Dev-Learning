import {useState} from 'react'

function APP()
{

    return (<>
    <div className='grid grid-cols-3 md:grid-cols-12'>
        <div className='col-span-3 md:col-span-4   bg-red-500 text-3xl text-red-600'>This is class1</div>
        <div className='col-span-3 md:col-span-4   bg-blue-300 rounded-2xl'>This is class2</div>
        <div className='col-span-3 md:col-span-4   bg-green-300 rounded-md'>This is class3</div>
    
    </div>
    </>)
}// or just make grid grid-cols-3
// then for each child col-span-12 md:col-span-4 this will do the exact thing

// text-3xl makes the text much larger in the first div.
// The height of the div increases to fit the larger text.
// The other divs have default text size, so they are shorter in height.
// All three divs have the same width (because of col-span-3), but the first one is 
// taller due to the bigger text.
export default APP
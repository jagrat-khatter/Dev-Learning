import React , {usetState , useEffect} from 'react'

function APP(){
    return (<><div className='flex'>
    <Sidebar />
    <MainContent />
    </div>
    </>)
}

function Sidebar(){
    return (<>
    <div className='w-84 h-screen bg-amber-300' />
    </>)
}


function MainContent()
{
    return (<div className='w-full'>
    <div className='h-40 bg-black' ></div>
    <div className='grid grid-cols-10 gap-12 p-8 py-24'>
        <div className='h-64 rounded-2xl shadow bg-red-400 col-span-2 -translate-y-32'>

        </div>
        <div className='h-84 rounded-2xl shadow bg-green-400 col-span-5 '>
            
        </div>
        <div className='h-56 rounded-2xl shadow bg-purple-400 col-span-3 '>
            
        </div>

    </div>
    </div>)
}

export default APP
import React , {useState , useEffect} from 'react'
import {SidebarToggle} from '../assignment_components/toggle_icon';

function APP(){
    const [sideBarOpen , setSideBarOpen] = useState(true);

    return (<><div className='flex'>
    <Sidebar sideBarOpen={sideBarOpen}  setSideBarOpen={setSideBarOpen} />
    <MainContent />
    </div>
    </>)
}

function Sidebar({sideBarOpen , setSideBarOpen}){

    if(sideBarOpen)
    {return (<>
    <div className='w-84 h-screen bg-amber-300' > 
        <div>
            <div className='cursor-pointer hover:bg-slate-300' onClick={()=>{
                setSideBarOpen(prev => !prev);
            }}>
                <SidebarToggle />
            </div>
        </div>
    </div>
    </>)}
    else{
        return (<>

        <div>
            <div className='cursor-pointer hover:bg-slate-300' onClick={()=>{
                setSideBarOpen(prev => !prev);
            }}>
                <SidebarToggle />
            </div>
        </div>
    
    </>)
    }
}


function MainContent()
{
    return (<div className='w-full'>
    <div className='h-40 bg-black' ></div>
    <div className='grid grid-cols-10 gap-12 p-8 py-24'>
        <div className='h-64 rounded-2xl shadow bg-red-400 lg:col-span-2 -translate-y-32 col-span-11 hidden lg:block'>

        </div>
        <div className='h-84 rounded-2xl shadow bg-green-400 lg:col-span-5 col-span-11'>
            
        </div>
        <div className='h-56 rounded-2xl shadow bg-purple-400 lg:col-span-3 col-span-11'>
            
        </div>

    </div>
    </div>)
}

export default APP
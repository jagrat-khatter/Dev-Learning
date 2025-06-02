import React , {useState , useEffect} from 'react'
import {useRecoilValue , useSetRecoilState  , useRecoilState} from 'recoil'
import {networkAtom , notificationsAtom , jobsAtom , messagingAtom} from '../Store/atoms/atom1'
import {totalNotificationsSelector} from '../Store/selectors/selectors1'
// Here you learn use of selector
// This Counter will only change when the value returned by the selector changes
const Counter = ()=> {
    const Total_Count = useRecoilValue(totalNotificationsSelector);
    console.log("RENDER");
    return <div>{Total_Count ? "EVEN" : "ODD"}</div>
}
const TopBar =()=>{
    const notificationsCount = useRecoilValue(notificationsAtom);
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const [messageCount , setMessageCount] = useRecoilState(messagingAtom);
   
    
    return (<>
    <button>Home</button>
    <button>Network {networkCount>99 ? "99+" : networkCount}</button>
    <button>Jobs {jobsCount}</button>
    <button>Notifications {notificationsCount}</button>
    <button>Messages {messageCount}</button>
    
    <button onClick={()=>{setMessageCount(c => c+1)}}>Plus 1</button>
    <button onClick={()=>{setMessageCount(c => c+2)}}>Plus 2</button>
    </>)
}

function APP()
{
    return (<>
    <TopBar />
    <Counter />
    </>)
    // If in total count we want to see even values only
}

export default APP
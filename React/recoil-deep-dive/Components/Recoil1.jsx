import React , {useState , useEffect} from 'react'
import {useRecoilValue , useSetRecoilState  , useRecoilState} from 'recoil'
import {networkAtom , notificationsAtom , jobsAtom , messagingAtom} from '../Store/atoms/atom1'
// Here you learn use of atoms , 
// useRecoilValue , useSetRecoilState , useRecoilState
// if a component is using useRecoilValue or useRecoilState and atom changes then that component
// will re-render

// IMPORTANT ADDITIONS:
// - useSetRecoilState does NOT cause re-renders when the atom changes (write-only)
// - Component will ONLY re-render if the SPECIFIC atom/selector it's subscribed to changes
// - If multiple atoms change at the same time, component still re-renders only once (batching)
// - Component will re-render even if it doesn't actually use the atom value in its JSX
function APP()
{
    const notificationsCount = useRecoilValue(notificationsAtom);
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const [messageCount , setMessageCount] = useRecoilState(messagingAtom);

    return (<>
    <button>Home</button>
    <button>Network {networkCount>99 ? "99+" : networkCount}</button>
    <button>Jobs {jobsCount}</button>
    <button>Messages {messageCount}</button>
    <button>Notifications {notificationsCount}</button>

    <button onClick={()=>{setMessageCount(c => c+1)}}>PRESSSSS</button>
    </>)

}

export default APP
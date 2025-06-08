import {useRecoilValue , useSetRecoilState , atom , selector} from 'recoil'
import {networkAtom , notificationsAtom , jobsAtom , messagingAtom} from '../atoms/atom1'
export const totalNotificationsSelector= selector({
    key : "totalNotificationsSelector",
    get : ({get}) => {
        const a = get(networkAtom);
        const b = get(notificationsAtom);
        const c = get(jobsAtom);
        const d = get(messagingAtom);
        const isEven  = (a+b+c+d)%2 == 0;

        return (isEven); // if this return changes then it will we considered as change 
    }
})
// The get function is a dependency tracker provided by Recoil that allows selectors to read 
// values from other atoms or selectors
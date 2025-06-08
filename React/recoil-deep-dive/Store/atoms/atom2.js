import { atom, selector } from "recoil";
import axios from 'axios';

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 0, 
//         jobs: 0, 
//         messaging: 0, 
//         notifications: 0
//     }
// });
// Asynchronous data queries
export const notifications = selector({
    key : "networkAtom2",
    get : async () =>{
            await new Promise(resolve => setTimeout(resolve , 2000));
            const res = await axios.get("https://ab2f5ef5-93d7-4912-b5f7-822c20501863-00-361653a671ye8.sisko.replit.dev/");
            return res.data
        }
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
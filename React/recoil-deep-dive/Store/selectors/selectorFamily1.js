import {atom , selector , atomFamily , selectorFamily} from 'recoil';
import axios from 'axios'

// you should use selectorfamily with atomFamily for async queries 
// because atomFamily creates multiple atoms and 

// The get function is a dependency tracker provided by Recoil that allows selectors to read 
// values from other atoms or selectors.


export const todoAtomFamily= selectorFamily({
    key : "todoAtomFamily2" ,
    get : (id) => async ({get}) => {
        // the get provided by recoil is not being used 
        // the get of axios is being used 
            await new Promise(resolve => setTimeout(resolve , [3000]));
            const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
            return res.data ;
        }
})

// function (id){        // we can write this also in get
//     return async function ({get}){
//         const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
//             return res.data ;
//     }
// }


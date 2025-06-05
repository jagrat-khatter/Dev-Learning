import {atom , selector , atomFamily} from 'recoil'
import {TODOS} from '../todos'

// .find() function
// Returns: The first element that matches, or undefined if none found
// Stops: As soon as the first match is found (doesn't continue searching)
// Callback must return boolean: true = found, false = keep looking


export const todoAtomFamily = atomFamily({ // this todoAtomFamily is a function which returns a atom 
                                           // on giving a argument
    key : "todoAtomFamily" ,
    default : (id) =>{          // given an id as an argument 
        return TODOS.find(x => x.id === id)
    } // only first time a todo with a specific id is searched after that it is cached 
      // and if same id todo is required again it is provided from cached memory

    // (id) =>{           // can be replaced by 
    //     const foundTodo = null;
    //     for(let i=0;i<TODOS.length;i++){
    //         if(TODOS[i].id === id){
    //             foundTodo = TODOS[i];
    //             break;
    //         }
    //     }

    //     return foundTodo;
    // }
})

// we could have done this
// const todoFamily = atom({    // but the problem here was every todo component with diff id will subscribe
//     key : "todoFamily",      // to todoFamily and if a single todo changes then all the todo components
//     default : TODOS          // will re-render whether if they were using that todo is or not
// })


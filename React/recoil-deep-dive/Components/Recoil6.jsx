import React , {useEffect} from 'react'
import {atom , selector , atomFamily , selectorFamily , useRecoilValue , useRecoilStateLoadable } from 'recoil'
import {todoAtomFamily} from '../Store/selectors/selectorFamily1'
// *** If queries require async or are dependent on params then we return from atom or selectors
// whichever we are using 

function APP()
{
    // const [status  , setStatus]= useRecoilStateLoadable(todoAtomFamily);
    
    // we can also use <Suspense fallback={<div>Loading all todos...</div>} > and wrap all todos
    return (<>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} /> 
    <Todo id={4} />
    <Todo id={4} />
    <Todo id={4} />

    </>)
// notice in network tab it only send one request for todo with id4 because it is cached
}

function Todo({id}){
    const [todoLoadable , setTodoLoadable] = useRecoilStateLoadable(todoAtomFamily(id));
    
    switch(todoLoadable.state) {
        case 'loading':
            return <div>Loading todo {id}...</div>;
        case 'hasError':
            return <div>Error loading todo {id}</div>;
        case 'hasValue':
            const todo = todoLoadable.contents;
            return <>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
            </>;
    }
}


export default APP
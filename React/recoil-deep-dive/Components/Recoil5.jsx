import {useRecoilValue , useSetRecoilState , useRecoilState} from 'recoil'
import {todoAtomFamily} from '../Store/atoms/atomFamily1'
import React , {useEffect} from 'react'

function APP(){
    const [todo , setTodo] = useRecoilState(todoAtomFamily(2)) ;
    useEffect(()=>{
        setTimeout(()=>{
            setTodo({
                id : 2,
                title : "New title",
                description : "New description"
            })
        } , 3000)
    } , [])
// this useRecoilState will trigger APP re-render so all the Todo child will re-render
// this is just for explaining the change that happens in todo with id=2

    return (<>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={1} />
    <Todo id={1} />
    </>)
}

function Todo({id}){
    const currentTodo = useRecoilValue(todoAtomFamily(id));

    return (<>
    <div>{currentTodo.title} </div> 
    <div>{currentTodo.description}</div>
    </>)
}
export default APP
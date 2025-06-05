import {useRecoilValue , useSetRecoilState , useRecoilState} from 'recoil'
import {todoAtomFamily} from '../Store/atoms/atomFamily1'

function APP(){
    return (<>
    <Todo id={1} />
    <Todo id={2} />
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
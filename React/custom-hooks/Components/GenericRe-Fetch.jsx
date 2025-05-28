
import React , {useState} from 'react'
import useGenrReFetch from '../hooks/useGenrReFetch'

function APP(){
    const [currentPost , setCurrentPost] = useState(1);
    const {post , loading} = useGenrReFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost , 2);

    function DisplayPost(){
        //if(post === null) return <div>Loading</div>(first method for loading)
        if(loading) return <div>Loading....</div>
        else{
            return <>
            <div>User id : {post.id}</div>
            <div>Title is : {post.title}</div>
            <div>Body is : {post.body}</div>
            </>
        }
    }

    return (<>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    <DisplayPost />
    </>)

}

export default APP
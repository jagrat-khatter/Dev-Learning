import React , {useState , useEffect} from 'react'
import useFetch from '../hooks/useFetch'

// When you create a custom hook, the core functionality of the original React hooks 
// (useState, useEffect, etc.) does not change.

// A custom hook is just a function that uses one or more built-in hooks to encapsulate logic.
function APP(){
    const post = useFetch();// object destructuring not required only one thing is coming

    function DisplayPost(){
        if(post === null) return <div>Loading</div>
        else{
            return <>
            <div>User id : {post.id}</div>
            <div>Title is : {post.title}</div>
            <div>Body is : {post.body}</div>
            </>
        }
    }

    return (
        <>
        <DisplayPost />
        </>
    )

}

export default APP

// Step-by-step Code Flow
// Component Render Starts

// APP component renders.
// The line const post = useFetch(); is executed.
// Custom Hook Execution

// useFetch() runs:
// Initializes post state as null.
// Sets up a useEffect to fetch data after the first render.
// First Render

// post is null (because the fetch hasn’t completed yet).
// DisplayPost() is called, which returns <div>Loading</div>.
// After Render: useEffect Runs

// React runs the useEffect inside useFetch after the render.
// fetchData() is called, which fetches the data from the API.
// When the data arrives, setPost(final) updates the state inside the hook.
// Re-render

// Because setPost was called, useFetch runs again, but this time post contains the fetched data.
// APP re-renders, const post = useFetch(); now gives the fetched post.
// DisplayPost() now returns the post details instead of "Loading".


// const [post , setPost] = useState(null);

//     useEffect(()=>{
//         async function fetchData(){
//             const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//             const final = await data.json(); // to convert data from json string to JS object
//             setPost(final);
//         }
//         fetchData();
//     } , [])
//     function DisplayPost(){
//         if(post === null) return <div>Loading</div>
//         else{
//             return <>
//             <div>User id : {post.userId}</div>
//             <div>Title is : {post.title}</div>
//             <div>Body is : {post.body}</div>
//             </>
//         }
//     }

//     return (
//         <>
//         <DisplayPost />
//         </>
//     )
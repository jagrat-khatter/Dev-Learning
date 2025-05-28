import React , {useState , useEffect} from 'react'
function useFetch(){
    const [post , setPost] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const final = await data.json(); // to convert data from json string to JS object
            setPost(final);
        }
        fetchData();
    } , [])

    return post; // first this returns happen then Updates are commited to DOM (post=null)
    // Then this useEffect runs // setPost changes state varaibele
    // again this useFetch runs post is again return with upadted state 
    // But this time useEffect does not run 
    
}

export default useFetch
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

    return post;
    
}

export default useFetch
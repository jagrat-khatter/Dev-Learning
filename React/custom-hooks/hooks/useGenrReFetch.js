import React ,{useEffect , useState , useRef } from 'react'
function useGenrReFetch(url , tr)
{
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const tref = useRef();


    useEffect(()=>{
    try {
        async function fetchData(){
            setLoading(true);
            const payload = await fetch(url);
            const final = await payload.json();// converting JSON string to JS object 
            setData(final);
            setLoading(false);
        }
        

        fetchData();
    }
    catch(err) { console.log("There is something wrong"); }
    } , [url , tr]) // anytime the url changes this useEffect should run 
    // when useGenrFetch is called again 
    useEffect(()=>{
        tref.current = setInterval(()=>{
            async function fetchData(){
                const payload = await fetch(url);
            const final = await payload.json();// converting JSON string to JS object 
            setData(final);
            }

            fetchData();
            
        } , tr * 1000)

        return () => clearInterval(tref.current);
    },[url , tr])


    return ({
        post : data , // we are reciving there as post 
        loading : loading
    })

}

export default useGenrReFetch
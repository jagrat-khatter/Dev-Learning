import React ,{useEffect , useState } from 'react'
function useGenrFetch(url)
{
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);

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
    } , [url]) // anytime the url changes this useEffect should run 
    // when useGenrFetch is called again 


    return ({
        post : data , // we are reciving there as post 
        loading : loading
    })

}

export default useGenrFetch
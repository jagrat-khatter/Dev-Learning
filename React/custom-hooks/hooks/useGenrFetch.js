import React ,{useEffect , useState } from 'react'
function useGenrFetch(url)
{
    const [data , setData] = useState(null);

    useEffect(()=>{
    try {
        async function fetchData(){
            const payload = await fetch(url);
            const final = await payload.json();// converting JSON string to JS object 
            setData(final);
        }

        fetchData();
    }
    catch(err) { console.log("There is something wrong"); }
    } , [url]) // anytime the url changes this useEffect should run 
    // when useGenrFetch is called again 


    return data;

}

export default useGenrFetch
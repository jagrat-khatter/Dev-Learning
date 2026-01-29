import axios from "axios"

type Params = {
    params : Promise<{
        postId : string;
    }>
}

export default async function ({params} : Params){
    try{
        const postId  = (await params).postId;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);

        return (<div>
            <div>UserId   {response.data.userId}</div>
            <div>Title    {response.data.title}</div>
            <div>Status:   {response.data.completed}</div>
        </div>)
        
    }
    catch(e){
        console.log(e);
        return  <div>Something went wrong</div>
    }


    
}
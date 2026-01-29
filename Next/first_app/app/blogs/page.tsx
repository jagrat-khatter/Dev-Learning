import axios from 'axios'
async function getBlogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}
interface TodoProps{
    id : number ,
    userId : number ,
    title : string ,
    completed : boolean
}
function Todo({id, userId, title, completed} : TodoProps){
    return <div>
        <h3>{userId}</h3>
        <p>{title}</p>
        <p>Completed: {completed ? "Done!" : "Not Done!"}</p>
    </div>
}
export default async function blog(){
    const blogs:TodoProps[] = await getBlogs();
    
    return <>{blogs.map((x:TodoProps) => <Todo key={x.id} id={x.id} userId={x.userId} title={x.title} completed={x.completed}/>)}</>
    
}
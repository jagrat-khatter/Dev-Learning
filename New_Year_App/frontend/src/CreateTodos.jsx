import {useState} from 'react'
export function CreateTodos()
{
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return (
        <div>
            <input style={{
                padding :10 , margin :10
            }}type="text" placeholder="title" onChange={function(e){
                const value = e.target.value;// you need to parse from innput boxes if you are expecting int or float
                setTitle(value);
            }}></input><br/>

            <input style={{
                padding :10 , margin :10
            }}type="text" placeholder="description" onChange={function(e){
                const value = e.target.value;// you need to parse from innput boxes if you are expecting int or float
                setDescription(value);
            }}></input><br/>
            
            <button style={{
                padding :10 , margin :10
            }} onClick={async () => {
                const res = await fetch('http://localhost:3000/todo' ,{ method : "POST" , body : JSON.stringify({
                    title : title ,
                    description : description
                }),headers :{"Content-Type" : "application/json"}})
                const response = res.json();
                alert("Todo Added") ;
            }}> Add a todo</button>
        </div>
    )
}
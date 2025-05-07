// This will give the component of rendered todo
export function Todos(props) { // suppose this time props 

    const todos = props.todos ; // this is js only so no {} required the return part is jsx so there {} required 
    if (!Array.isArray(todos)) { // Check if todos is an array
        return <div>Loading todos...</div>; // Or return null, or some other message
    }
    return (<div>
        {todos.map(function(todo)
        {
            return ( <div key={todo.id}> {/* Use todo.id as key */}
                    <h1>{todo.title} </h1>
                     <h2> {todo.description}</h2>
                    <button> {todo.completed==true ? "Completed" : "Mark as Done "}</button>
                    </div>
            )
        })}
    </div>)
}
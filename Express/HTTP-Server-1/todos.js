const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { todo } = require('node:test');

app.use(cors());

// Array of sample ToDo items
const todos = [
  { id: 1, title: "Learn Node.js", description: "Read the official Node.js documentation." },
  { id: 2, title: "Build an API", description: "Create a RESTful API using Express.js." },
  { id: 3, title: "Connect to MongoDB", description: "Set up a MongoDB database and connect to it." },
  { id: 4, title: "Implement Authentication", description: "Add user authentication to the API." },
  { id: 5, title: "Deploy the App", description: "Deploy the Node.js application to a server." },
  { id: 6, title: "Write Tests", description: "Write unit and integration tests for the application." },
  { id: 7, title: "Learn React", description: "Start learning React for the frontend." },
  { id: 8, title: "Build a Todo App", description: "Create a full-stack todo application." },
  { id: 9, title: "Style the App", description: "Make the application look nice with CSS." },
  { id: 10, title: "Optimize Performance", description: "Improve the application's performance." },
];

// Function to get a random subset of ToDos
function getRandomTodos(count) {
    const shuffled = todos.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Get the first 'count' elements
}

// Route to get random ToDos
app.get('/todos', (req, res) => {
  console.log('req');
  try{const numberOfTodos = parseInt(req.query.count) || 2; // Default to 2 if count is not provided
  if(numberOfTodos > todos.length){
      numberOfTodos = todos.length;
  }
  const randomTodos = getRandomTodos(numberOfTodos);
  res.json({ todos: randomTodos });}

  catch(err){
    console.log(err);
    return res.status(404).json({msg : "could not send"})
  }
});

// app.get('/todo' , function(req , res){
//   console.log('req');
//   const id = parseInt(req.query.id);
//   console.log(id);
//   for(let i=0;i<todos.length;i++){
//     if(id == todos[i].id) {
//       const final ={ todos : todos[i]} ;
//       return res.status(200).json(final);
//     }
//   }
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
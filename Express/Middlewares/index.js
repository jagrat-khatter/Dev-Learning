const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

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
  { id: 8, "title": "Build a Todo App", description: "Create a full-stack todo application." },
  { id: 9, title: "Style the App", description: "Make the application look nice with CSS." },
  { id: 10, title: "Optimize Performance", description: "Improve the application's performance." },
];

// --- New route to get a specific ToDo by ID ---
app.get('/todo', (req, res) => { // Changed endpoint to '/todo' for single item retrieval
  // Get the 'id' from the query parameters (e.g., /todo?id=3)
  const todoId = parseInt(req.query.id);

  // Check if an ID was provided and if it's a valid number
  if (isNaN(todoId)) {
    return res.status(400).json({ error: "Please provide a valid ToDo ID as a query parameter (e.g., /todo?id=3)." });
  }

  // Find the ToDo item with the matching ID
  const todo = todos.find(item => item.id === todoId);

  // If a ToDo is found, send it as JSON
  if (todo) {
    res.json(todo);
  } else {
    // If no ToDo is found, send a 404 Not Found status with an error message
    res.status(404).json({ error: `ToDo with ID ${todoId} not found.` });
  }
});

// --- Existing route to get random ToDos (kept for reference, but can be removed if not needed) ---
// Function to get a random subset of ToDos
function getRandomTodos(count) {
    const shuffled = [...todos].sort(() => 0.5 - Math.random()); // Shuffle the array (create a copy to avoid modifying original 'todos')
    return shuffled.slice(0, count); // Get the first 'count' elements
}

// Route to get random ToDos
app.get('/todos', (req, res) => {
  let numberOfTodos = parseInt(req.query.count) || 2; // Default to 2 if count is not provided
  if(numberOfTodos > todos.length){
      numberOfTodos = todos.length;
  }
  const randomTodos = getRandomTodos(numberOfTodos);
  res.json({ todos: randomTodos });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Access specific ToDo at /todo?id=X');
  console.log('Access random ToDos at /todos?count=Y');
});

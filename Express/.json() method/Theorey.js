/* 
 The .json() method behaves differently depending on the context in which it is used.

 
In Express (Server-Side):
res.status(200).json({...}):
This method is used to send a JSON response from the server to the client.
It converts a JavaScript object into a JSON string and sets the Content-Type header to application/json.
Example:
res.status(200).json({
    msg: `Total number of requests up until now is ${nor}`
});


In Fetch API (Client-Side):
response.json():
This method is used to parse a JSON response from the server.
It reads the response stream to completion and parses the JSON string into a JavaScript object.
Example:
fetch('/some-endpoint')
    .then(response => response.json())
    .then(data => {
        console.log(data); // data is now a JavaScript object
    })
    .catch(error => {
        console.error('Error:', error);
    });

Example Code for Both Contexts:
Server-Side (Express):
const express = require('express');
const app = express();

let nor = 0;

function requestcalculator(req, res, next) {
    nor++;
    next();
}

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to count the number of requests
app.use(requestcalculator);

app.get('/route1', function(req, res) {
    // Set the status code to 200 (OK) and send a JSON response
    res.status(200).json({
        msg: `Total number of requests up until now is ${nor}`
    });
});

app.post('/route1', function(req, res) {
    // Set the status code to 200 (OK) and send a JSON response
    res.status(200).json({
        msg: `Total number of requests up until now is ${nor}`
    });
});

app.get('/route2', function(req, res) {
    // Set the status code to 200 (OK) and send a JSON response
    res.status(200).json({
        msg: `Total number of requests up until now is ${nor}`
    });
});

app.listen(3000, function() {
    console.log(`App is listening on port 3000`);
});

Client-Side (Fetch API):
// Example of using fetch to get data from the server

fetch('/route1')
    .then(response => response.json()) // Parse the JSON string into a JavaScript object
    .then(data => {
        console.log(data); // data is now a JavaScript object
    })
    .catch(error => {
        console.error('Error:', error);
    }); */
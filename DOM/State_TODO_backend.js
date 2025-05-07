const express = require(`express`);
const app = express();

app.use(express.json()) ;  // this .json() will acts as a body parser converts JSON string to JS object so that we can use it in the script

app.get('/' , function(req, res)
{
    res.status(200).json([  // this json will convert my JS object to JSON string 
        {
            title : "JAGRAT",
            description : "Do your work",
            globalId : 45
        },
        {
            title : "DARSHAN",
            description : "Mere notes premium hai",
            globalId : 12
        },
        {
            title : "Attri",
            description : "Go to Jail",
            globalId : 6712
        }
])
})
app.listen(3000 , function(req, res)
{
    console.log(`App is listening on port ${3000}`) ;
})
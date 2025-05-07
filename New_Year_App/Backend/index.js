// write basic express() boiler plate code with express.json() middleware
const express = require(`express`);
const {schema1 , schema2} = require('./Types.js'); // importing schema1 and schema2(object destructuring)
// schema1 is for creating the todos and schema2 is for marking down the todo
const {Todo} = require('./db.js');
const cors = require(`cors`);
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());// for converting JSON string in body to JS object

app.post('/todo' ,async function(req,res)// To create todos
{
    try
    {const createPayload = req.body;
    const response = schema1.safeParse(createPayload);
    if(!response.success) 
    {
        return res.status(400).json({
            msg : "You have sent wrong inputs"
        })
    }
    const status =await Todo.create({  // if this fails the await will throw an exception without any specifc name or message 
        title : createPayload.title ,
        description : createPayload.description ,
        completed : false 
    })
    return res.status(200).json({
        msg : "Todo created"
    })}
    catch(err)
    {
        res.status(500).json({
            msg : "An error occurred while creating the todo"
        })
    }
})
app.get('/todos' , async function(req ,res) // To get todos
{
    const todos = await Todo.find({}) ; 
    res.status(200).json({ // converst the JS object to JSON string 
        todos 
    })
})

app.post('/completed' ,async function(req , res) // To mark todo as done
{
    try
    {const createPayload = req.body;
    const response=schema2.safeParse(createPayload);
    if(!response.success) {
        return res.status(400).json({
            msg : "You have sent wrong inputs "
        })
    }
    const status = await Todo.updateOne({ // updateOne expects the condition ans what is to be updated as arguments 
        _id : createPayload.id,   // if something bad happens this will throw an exception without an clear message 
    } , {completed : true})
    
    return res.status(200).json({
        msg : "Todo updated succesfully"
    })}
    catch(err)
    {
        return res.status(500).json("Todo could not be marked done") ;
    }
})

app.listen(port , function(req , res)
{
    console.log(`App is listening on port ${3000}`);
})
// in this piece we'll see the usecase of app.use()
// if you know there is a middleware which needs to be called for every other route

const express = require(`express`) ;
const app = express();

let nor = 0;
function requestcalculator(req ,res , next)
{
    nor++;
    next();
}
app.use(express.json())
app.use(requestcalculator)

app.get('/route1' , function(req , res){
    res.status(200).json({
        msg : `Total number of request up until now is ${nor}` 
    })
})
app.post('/route1' , function(req , res){
    res.status(200).json({
        msg : `Total number of request up until now is ${nor}`
    })
})
app.get('/route2' , function(req , res){
    res.status(200).json({
        mag : `Total number of request up until now is ${nor}`
    })
})

app.listen(3000 , function(req ,res)
{
    console.log(`App is listening on port ${3000}`);
})
// why to we use app.use(express.json()) bcoz 'express.json()' itself returns a function which helps us to
// use the body parameters bcoz body can be in any format json , html , xml , text , javascript
// we need to specify what we are expecting from the body 

// app.use should be above all routes in which you eant that midlleware to function 

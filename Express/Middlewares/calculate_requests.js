const express = require(`express`) ;
const app = express();
app.use(express.json());

let nr = 0;

// counting the number of requests hitted to the server 
function calcluateRequests(req , res , next)
{
    nr++;
    console.log(`Number of requests up until now is ${nr}`);

    next();
}

app.get('/' , calcluateRequests , function(req , res){
    res.json({
        msg : `everything is fine` 
    })
})
app.listen(3000 , function(req ,res)
{
    console.log(`App is listening on potr ${3000}`);
})
const express = require(`express`);
const app = express();

app.use(express.json()) ;

app.get('/health-checkup' , function(req , res)
{
    const kidneyId = req.body.kidneys;
    const kidneys_length = kidneyId.length ;
    res.status(200).json({
        msg : `Everytihng looks good your health checkup is done by get request !`
    })
})

app.post('/health-checkup' , function(req , res){
    const kidneyId = req.body.kidneys;
    const kidneys_length = kidneyId.length ;
    res.status(200).json({
        msg : `Everything looks good you r health checkup is done by post request `
    })
})
app.use(function(err , req , res , next)
{
    res.status(500).json({
        msg : `Something is up with our server !`
    })
})
app.listen(3000 , function(req , res)
{
    console.log(`App is listening on port ${3000}`);
})

// Error Handling Middleware : This is a special type of midlleware function in express which has four
// arguments instead of three (err , req , res , next) . Express recognizes it as an error handling midlleware 
// bcoz of these four arguments 
// If there is some exception then only control reaches to global catches function 
const express = require(`express`) ;
const app  = express();

app.use(express.json());

function user_middleware(req  , res , next)
{
    const username = req.headers.username;
    const password = req.headers.password;
    

    if(username!=`Jagrat` || password!=`pass`) 
    {
        res.status(403).json({
            msg : `User does not exist `
        })
        return ;// there is no need of adding return vaise bcoz if server cannot resend something 
                // but is you want to log something that could be done even after sending something to client 
    }
    else next();
}
function kidney_middleware(req , res , next)
{
    const kidneyId = req.query.kidneyId;

    if(kidneyId!=1 && kidneyId!=2) 
    {
        res.status(401).json({
            msg : `There is something up with the input given `
        })
    }
    else next();
}
//you can make these middleware functions asynchronous also
app.get('/health-checkup' , user_middleware , kidney_middleware , function(req , res)
{
    res.status(200).json({
        msg : `everything seems fine health-checkup is done `
    })
})
app.get('/kidney-checkup' , user_middleware , kidney_middleware , function (req , res)
{
    res.status(200).json({
        msg : `everything seems fine kidney-checkup is done `
    })
})
app.get('/heart-checkup' , user_middleware , function(req , res)
{
    res.status(200).json(
        {
            msg : `Everything seems fine heart checkup is done`
        }
    )
})

app.listen(3000 , function()
{
    console.log(`App is listening on port ${3000}`);
})

// if i hit get request , /health-checkup the all the req, res will be provided to all the middlewares

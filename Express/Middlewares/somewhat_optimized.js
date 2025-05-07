const express = require('express') ;
const app = express();
app.use(express.json()) ;
function username_validator(username , password)
{
    if(username != `Jagrat` || password!=`pass`)
        return 0;
    else return 1
}
function kidney_validator(kidneyId)
{
    if(kidneyId!=1 && kidneyId!=2)
        return 0;
    else return 1;
}

app.get('/' , function(req ,res){
    const kidneyId= req.query.kidneyId;
    const username= req.headers.username;
    const password= req.headers.password;

    console.log(`kidneyId : ${kidneyId}`) ;

    if( !username_validator(username , password))
    {
        res.status(403).json({
            msg : `User does not eixst `
        })
    }
    if( !kidney_validator(kidneyId))
    {
        res.status(401).json({
            msg : `There is something up with your inputs .`
        })
    }

    res.status(200).json({
        msg : `Everything looks fine `
    })


    // remaining logic for get request 
})

app.post('/' , function(req ,res){
    const kidneyId= req.query.kidneyId;
    const username= req.headers.username;
    const password= req.headers.password;

    if( !username_validator(username , password))
    {
        res.status(403).json({
            msg : `User does not eixst `
        })
    }
    if( !kidney_validator(kidneyId))
    {
        res.status(401).json({
            msg : `There is something up with your inputs .`
        })
    }    

    res.status(200).json({
        msg : `Everything looks fine `
    })

    // remaining logic for post request 
})
app.listen(3000 ,function()
{
    console.log(`App is listening on port ${3000}`) ;
})
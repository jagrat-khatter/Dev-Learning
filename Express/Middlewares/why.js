// we try to make authentication systems without the midllewares
const express = require('express') ;

const app = express();
app.use(express.json());

app.get('/' , function(req , res)
{
    //const kidneyId= parseInt(req.query.kidneyId);
    const username= req.headers.username;
    const password= req.headers.password;
    const kidneyId= parseInt(req.query.kidneyId);

    console.log(`kidneyId: ${kidneyId} , username: ${username}, password: ${password}`);

    if(username!= "Jagrat" || password!= "pass")
    {
        res.status(403).json({
            msg : `user does not exist` 
        })

        return ;
    }
    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(401).json({
            msg : `wrong inputs are given `
        })

        return ;
    }

    res.status(200).json({
        msg: `everything looks fine` 
    })
})
app.listen(3000 ,()=>{
    console.log(`App is listening on port ${3000}`);
})


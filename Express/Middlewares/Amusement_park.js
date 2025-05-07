const express= require(`express`) ;
const app = express();

function isAge(n)
{
    if(n>=15) return true;
    else return false;
}
function isAge(req , res , next)
{
    if(req.query.age >= 15) next();
    else return res.status(403).json({
        msg : "You are not allowed for the ride because of your age"
    })
}
app.get('/ride1' , isAge , function(req , res)
{
    res.status(200).json({
        msg : `You are allowed for ride 1`
    })
})

app.get('/ride2' , isAge , function(req , res){
    res.status(200).json(
        {
            msg : "You are allowed for ride 2"
        }
    )
})
app.get('/ride3' ,isAge , function(req , res)
{
    res.status(200).json({
        mag : `You are alloed for ride 3`
    })
})

app.listen(3000 , function(req , res)
{
    console.log(`App is listening on port ${3000}`)
})
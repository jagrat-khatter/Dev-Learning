const express = require(`express`);
const jwt = require(`jsonwebtoken`);
const jwtPassword = `123456`;
const app = express() ;

const allusers =[
    {
        username : "Ishant" ,
        age : 20,
        password : "australia_jana_hai"
    },
    {
        username : "Darshan" ,
        age : 19,
        password : "cgpa_9_lani_hai"
    },
    {
        username : "Keshav" ,
        age : 15 ,
        password : "scammer_911"
    }
]
function userexist(username , password)
{
    for(let i=0;i<allusers.length;i++)
    {
        if(allusers[i].username == username && allusers[i].password== password) return true;
    }
    return false;
}
app.use(express.json());

app.post('/signin' , function(req , res){

    const username = req.body.username;
    const password = req.body.password;

    if(!(userexist(username , password))) return res.status(403).json({
        msg : `You are not a premium memeber`
    })

    let token = jwt.sign({username : username} , jwtPassword) ;
        return res.status(200).json( token) ;
    
})

app.get('/user' , function(req, res){

    const token = req.headers.authorization ;
    
    try{
        let decoded = jwt.verify(token , jwtPassword);
        console.log(decoded);
        const username = decoded.username;
        return res.status(200).json({All_the_users_except_you_are : allusers.filter(function(value){
            if(value.username == username) return false;
            else return true;
        })}) ;
    }
    catch(err)
    {
        
        return res.status(403).json({
            msg : `You are not signed in`
        })
    }
})

app.listen(3000 , function(req , res){
    console.log(`The app is litening on port ${3000}`) ;
})

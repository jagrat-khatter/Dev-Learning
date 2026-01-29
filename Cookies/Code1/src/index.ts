import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt,{JwtPayload} from 'jsonwebtoken'
import path from 'path'

const PORT = 3000;
const app = express();
const JWT_SECRET = "CENTRALINTELLIGENCEAGENCY"
app.use(cookieParser());
app.use(express.json());
app.use(cors({// this cors allows only those origins(frontends) which are listed in it 
    // if there is other origin with same site it tries to access services of this backend
    // it will be neglected , you can add multiple origins in here 
    // Due to this reason some sites have a separate frontend page(origin) for auth 
    credentials : true ,
    origin : 'http://localhost:5173'
}))

// res.cookie never ends the response in an endpoint , actual response is sent when you call 
// res.send() , res.json() , res.end()
app.post('/signin' , (req , res)=>{
    const email = req.body.email;
    const password = req.body.password;
    // do db validations and fetch id of of user from db
    const token = jwt.sign({
        id : 3
    } , JWT_SECRET);
    res.cookie("token" , token);
    res.cookie("token4" , token);
    // this will just set the headers and not send res.headers.cookie
    // thanks to cookie parser site it tells the frontend to now everytime send this cookie in headers
    return res.status(200).json("Logged In!");  
})
//  A protected backend route
app.get('/user' , (req , res)=>{
    // without cookie parser library we have to first get req.headers.cookie then retrieve different things 
    const token = req.cookies.token;
    const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload;
    // getting data about this user from db
    return res.status(200).json({
        name : decoded.id
    })

})

// A logout route
app.get('/logout' , (req , res)=>{
    res.cookie("token","ads");
    return res.status(200).json({
        message : "Logged out!"
    })
})

app.listen(PORT ,()=>{
    console.log(`App is listening on ${PORT}`)
})
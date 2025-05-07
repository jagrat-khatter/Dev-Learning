// if we are expecting a json input like
// {
// email : string => email
// password at least 8 letters
// country : "IN" or "US"
// }
// While using zod we typically assume that payloads coming are in json format so we describe schema for that only 
const zod = require(`zod`);
const express = require(`express`) ;
const app = express();

const schema1 = zod.object({          // schema 1 is an instance of ZodSchema 
    email: zod.string().email() ,
    password : zod.string ().min(8) ,
    country : zod.literal("IN").or(zod.literal("US")) 
})
app.use(express.json()) ;

app.post('/' , function(req , res){
 // schema1.safeParse() is an instance method of the ZodSchema clas
    const  response = schema1.safeParse(req.body.obj1) ;
    if(response.success) res.status(200).json({msg : `Everything is fine`});
    else res.status(400).json({msg : `You are providing wrong input `});

})

app.listen(3000 , function(req , res){
    console.log(`App is listening on port ${3000}`);
})
// expected json     // all the 
/* {
    "obj1" : {"email" : "jagratkhatter@gmail.com" ,
     "password" : "Jagrat123" ,
     "country" : "US"} 
 } */
//  In the context of JSON, obj1, email, password, and country are referred to as keys or properties.

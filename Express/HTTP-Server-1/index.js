const express = require('express')
const bodyParser=require('body-parser')
const app = express() // call express function it will give back app object
const port = 3000// PORt is the enviroment variable 

app.use(bodyParser.json()) ;

function math(n)
{
  return ((n)*(n+1)) /2 ; 
}

app.post('/' , (req , res) =>{

  const arg = parseInt(req.query.a , 10) ;     // while getting something from body or header if that property
                        //name conatins special charcter user seyntax like req.body['property name']
  const ans = math(arg) 

  res.status(200).send(ans.toString());
})
 
app.listen(port,'0.0.0.0' ,() => {
  console.log(`Example app listening on port ${port}`)
})

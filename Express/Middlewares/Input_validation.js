const express = require(`express`) ;
const app = express();
app.use(express.json());
app.get('/health-checkup' , function(req, res)
{
    const kidneys = req.body.kidneys ;
    const kidneys_length = kidneys.length ;
    
    res.send(`you have ` + kidneys_length + ` kidneys`);
})

app.listen(3000 , function(req , res){
    console.log(`App is listeing on port ${3000}`);
})




// if user sends some jibrish which we are not expecting from user our server might crash and details of modules
// and data might get exposed to give user a cleaner response we use global catches
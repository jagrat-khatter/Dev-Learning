// you can use multiple if else to perform manual checks , but to make yourself productive library named zod
// came into pictur which simply tells bhaiya give me the properties which you are exprecting and i'll
// perform all the logic checks under the hood 
const express = require(`express`);
const app = express();
const zod = require(`zod`);

const schema1 = zod.array(zod.number());
app.use(express.json()) ;

app.get('/' , function(req , res){
    const kidneys = req.body.kidneys;
    const response = schema1.safeParse(kidneys);
 
    if(!response.success) res.status(401).json({ msg : `This input not expected !`});
    else{
        res.status(200).json({ msg : `Everything looks fine !`}) ;
    }
    //res.send(response) ;
})
app.use(function (err , req ,res, next){      // global catches when even zod cannot understand bcoz it was only expecting json 
    res.status(500).json({
        msg : `something is up with our server`
    })
})
app.listen(3000 , function(req ,res)
{
    console.log(`App is listening on port ${3000}`);
});
// if users send something jibrish that is not json , even zod does not understands then it will be counted
// as exception 
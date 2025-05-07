let  users=[              // array of objects 
    {
        name : `John`,
        kidneys : [
            {
                healthy : true
            },
            {
                healthy : true
            }
        ]
    },
    {
        name : `Joe` ,
        kidneys :[
            {
                healthy : false
            },
            {
                healthy : false
            }
        ]
    }
]
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// from .get method a user wants to know how many kidneys he has and how many of thm are healthy
app.get(`/` , (req ,res) => {
    const detail = users[0].kidneys ; // i have called the kidney object as detail
    const num_kidneys = detail.length ; 
    let  healthy_kidneys =0;
    for(let i=1;i<=detail.length;i++)
    {
        if(detail[i-1].healthy == true) healthy_kidneys++;
    }
    const unhealthy_kidneys = num_kidneys - healthy_kidneys ;
    res.json({
        num_kidneys ,
        healthy_kidneys ,
        unhealthy_kidneys
    })
    
})
// anytime a post request comes we will add an unhealthy kidney 
app.post(`/` , (req , res) => {

    const isHealthy = req.body.isHealthy ;
    users[0].kidneys.push({
        healthy : isHealthy 
    })
    res.json({
        msg : `Done`  
    })

})
// will convert all kidneys to healthy or all kidneys to unhealthy as requested by client
app.put(`/`, (req , res) => {

    const isHealthy = req.body.isHealthy ;
    for(let i=0;i<users[0].kidneys.length ;i++)
    {
        
        users[0].kidneys[i].healthy = isHealthy;
    }
    res.json({
        msg : 'done'
    })
})
// will delete specific type of kidneys as requested by client 
// if there are no specific type of kidneys that user is requesting that tell them 411
app.delete(`/` , (req , res) => {
    const isHealthy = req.body.isHealthy ;
    let  initsize = 0;

    for(let i=0;i<users[0].kidneys.length ;i++)
    {
        if(users[0].kidneys[i].healthy == isHealthy) initsize ++;
    }

    if(!initsize) res.status(411).send(`You have no ${isHealthy} kidney`) ;
    for(let i=0;i< users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy == isHealthy) {
            users[0].kidneys.splice(i,1);
            i--;
        }
    }

    res.json({
        msg : `Done` 
    })
})
app.listen(port  ,() => {
    console.log(`App is listening on ${port}`) ;
})
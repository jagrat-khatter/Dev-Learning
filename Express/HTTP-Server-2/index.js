const express = require('express')
const app = express()
const port = 2051

app.get('/' , function(req , res)
{
    res.send("This is my second server !");
})

app.listen(port , function()
{
    console.log(`This server is listening from port ${port}`)
})
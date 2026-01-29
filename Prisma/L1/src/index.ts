import { PrismaClient } from '@prisma/client';
import express  from 'express';
import { TodoScalarFieldEnum } from './generated/prisma/internal/prismaNamespace.js';

const app = express();
const PORT = 3004;
app.use(express.json());

const client = new PrismaClient();

app.get('/users' ,async(req , res)=>{
    try {
        const users = await client.user.findMany()
        return res.status(200).json({
            users
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error"
        })
    }
})
app.get('/todos/:id' , async(req , res)=>{
    try{
        const id = Number(req.params.id);
        const todos = await client.user.findFirst({
            where: {
                id : id
            },
            include: {
                todos : true
            }
        })
        return res.status(200).json({
            todos
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error"
        })
    }
})

app.listen(PORT , ()=>{
    console.log("App is listening on port")
})
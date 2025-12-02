import { Client }  from 'pg' 
import  express  from 'express'
import dotenv from "dotenv";
import type {Request , Response} from 'express'
const app = express();
app.use(express.json());
const PORT = 3000;
const pgClient =  new Client(process.env.DATABASE_URL)

const pgClient2 = new Client({
    user: "neondb_owner" ,
    database: "neondb" ,
    password: process.env.PG_PASSWORD,
    port: 5432 ,
    host: "ep-curly-moon-aa007mm3-pooler.westus3.azure.neon.tech" ,
    ssl: true
})

// Both instantiate a Client

const main = async ()=>{
    try {
        await pgClient2.connect();
        // The .connect() method is an instance method of the Client class
        console.log("Connected to DB");
    }
    catch(err){
        console.log("Could not connect to DB")
    }
}
main();

app.post('/signup' ,async (req,res)=>{
    try{

        await pgClient2.query('BEGIN;');
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;


        const insertQuery = `INSERT INTO users (username,email,password) VALUES ('${username}', '${email}', '${password}');` ;
        const insertQuery2 = `INSERT INTO users (username,email,password) VALUES ($1 , $2 , $3) RETURNING *;` ;
        // insertQuery and insertQuery2 are build for same thing but in insertQuery sql injections can happen

        //const response = await pgClient2.query(insertQuery);
        const response = await pgClient2.query(insertQuery2 , [username , email , password]);

        console.log(response);

        // for simlulating the breakdown of database 
        await new Promise((resolve , reject) => setTimeout(()=> reject(new Error) , 10 * 1000));

        const newId = response.rows[0].id; // this will store the id of new user created
        console.log(newId);
        // we'll usethis newId as foreign key in creating address entry in addresses table
        const insertQuery3 =`INSERT INTO addresses (user_id, city, street, pincode) VALUES ($1 , $2, $3, $4)` ;
        const response2 = await pgClient2.query(insertQuery3, [newId , 'Chandigarh' , 'high-street', '160014']) ;

        
        await pgClient2.query('COMMIT;');

        return res.status(200).json({
            msg : "MIssion successful"
        })

        
    }
    catch(err){
        console.log(err);

        return res.status(500).json({
            msg : "Internal Server error "
        })
    }

})

app.get('/metadata1' , async(req , res)=>{
    try
    {
        const id = req.query.id;

        const query1 = `SELECT id,username,email FROM users WHERE id=$1`;
        const response1 = await pgClient2.query(query1 , [id]);

        const query2 = `SELECT id,city,street,pincode FROM addresses WHERE user_id=$1`;
        const response2 = await pgClient2.query(query2 , [id]);

        return res.status(200).json({
            user : response1 ,
            addresses : response2
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error !"
        })
    }
})
app.get('/metadata2' , async (req , res)=>{
    try {
        const id = req.query.id;

        const query = `SELECT users.id, users.username, users.email, addresses.user_id, addresses.city, addresses.street, addresses.pincode
                        FROM users JOIN addresses ON users.id = addresses.user_id
                        WHERE users.id = $1`
        // ** All the columns cannot be included in joins of two tables cuz some column catgeory
        // in two tables might have same name 

        // In here if i try to join where columns name is users.id and addresses.id then one table
        // cannot have a two columns with same name (id) so the one written leftmost will have values
        // in id category

        const innerJoinQuery = `SELECT users.id, users.username, users.email, addresses.user_id, addresses.city, addresses.street, addresses.pincode
                                FROM users INNER JOIN addresses ON users.id = addresses.user_id ;`

        const leftJoinQuery = `SELECT users.id, users.username, users.email, addresses.user_id, addresses.city, addresses.street, addresses.pincode
                                FROM users LEFT JOIN addresses ON users.id = addresses.user_id ;`
        const rightJoinQuery = `SELECT users.id, users.username, users.email, addresses.user_id, addresses.city, addresses.street, addresses.pincode
                                FROM users RIGHT JOIN addresses ON users.id = addresses.user_id ;`
        const fullJoinQuery = `SELECT users.is, users.username, users.email, addresses.user_id, addresses.city, addresses.street, addresses.pincode
                                FROM users RIGHT JOIN addresses ON users.id = addresses.user_id ;`

        // makes no sense to implement RIGHT JOIN and FULL JOIN here bcoz there will we no address
        // entry which is not liked to users entry and independent of users entry bcoz in foreign 
        // key users is parent 
        
        const response = await pgClient2.query(query , [id]);
        const response2 = await pgClient2.query(innerJoinQuery);
        const response3 = await pgClient2.query(leftJoinQuery);

        

        return res.status(200).json({
            response3
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        })
    }
})

app.listen(PORT , ()=>{
    console.log(`App is listening on Port ${PORT}`);
})
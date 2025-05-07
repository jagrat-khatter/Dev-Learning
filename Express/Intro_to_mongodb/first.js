const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();
app.use(express.json());

 
mongoose.connect("mongodb+srv://Admin101:jagrat123@cluster0.ibywd.mongodb.net/");

const User = mongoose.model('Users' ,{ Name :String , Email : String , Password : String }) ;
// User is varaible name reference to the Mongoose model. It is used in your application code to
//  interact with the users collection in the database.

// The string 'Users' is the name of the model. It is used by Mongoose to create a collection in 
// the MongoDB database. In this case, the model name 'Users' will correspond to a collection 
// named users in the MongoDB database.

/* const user1 = new User({
    Name : `Darshan`,
    Email : `premiumnotes@hotmail.com`,
    Password : `cgpa_9_lani_hai`
})
user1.save( ) ; */
// user1 is the instance of tge User model in the database

app.post('/signup' , async function(req ,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try{
        const existinguser = await User.findOne({Email : email});
        if(existinguser){
            return res.status(400).json({
                msg: "This email is already linked with an account"
            })
        }

        const newUser= new User({
            Name : username ,
            Email : email ,
            Password : password
        })
        await newUser.save();
        // instead of this
        // await User.create({Name : username , Email : email , Password : password})
        return res.status(200).json({
            msg : `Account is succesfully created`
        }) 
    }
    catch(err)
    {
        return res.status(500).json({
            msg : "Error registering user",
            error : err
        })
    }
})

app.listen(3000 , function(req , res)
{
    console.log(`App is listening on port ${3000}`);
})





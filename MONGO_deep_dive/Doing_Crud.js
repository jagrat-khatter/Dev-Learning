const express = require(`express`);
const mongoose = require(`mongoose`);

const UserSchema = new mongoose.model({
    username : string ,
    password : string 
})
const model = mongoose.model(`User` , UserSchema) // Users will be created as collection in DB
// model is the JS variable that holds the Mongoose model object
// Create
model.create({
    username : req.body.username ,
    password : req.body.password
})
// Read
model.findById("1");
model.findOne({
    username : jagrat12_13        // finds one entry with this username
})
model.find({
    username : jagrat12_13         // finds every entry with this username
})
// Update
model.updateOne(
    { id : "1"},       // user with this id
    { $push : {purchasedCourses : courseId}}
)
model.updateOne(
    { id : "1"} , 
    { password : "NewPassword"}
)
model.update(
    {},    // for every row in the table 
    {premium : true}
)
// Delete
model.deleteMany(
    {}
)
mode.deleteOne(
    {username : "jagrat12_13" }
)
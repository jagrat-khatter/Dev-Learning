const express = require(`express`);
const mongoose = require(`mongoose`);

const UserSchema = new mongoose.Schema({
    email : String ,
    password : String ,
    purchasedCourses : [{
        type :mongoose.Schema.Types.ObjectId ,
        ref : `Course`
    }]
})
const CourseSchema = new mongoose.Schema({
    title : String ,
    price : 5999
})
const User = mongoose.model(`User` , UserSchema); // here the collection in mongoDb & is named Users from 
// `User` and the way 
//The const User (or const model) is simply a JavaScript variable that holds the Mongoose model object.
const Course = mongoose.model(`Course` , CourseSchema);
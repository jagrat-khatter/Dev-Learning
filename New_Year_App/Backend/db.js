const mongoose = require(`mongoose`);
const schemaDB = new mongoose.Schema({
    title : String,
    description : String ,
    completed : Boolean
})

mongoose.connect('mongodb+srv://Admin101:jagrat123@cluster0.ibywd.mongodb.net/Todo_app')
const Todo = mongoose.model('Todo', schemaDB);

module.exports={
    Todo
}
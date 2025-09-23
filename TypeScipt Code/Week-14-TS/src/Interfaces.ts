// const greet = (user :{name: string , age : number}):void=>{
//     console.log(`Hey your name is ${user.name} and your age is ${user.age}`) ;
// }

// const user1 = {     // object
//     name : "jagrat",
//     age : 19
// }
// greet(user1);


// Here if we define function again and again we have to define dataTypes again and again 
// How can you assign types for objects

interface User {
    name: string ,
    age : number
}
const greet = (user : User):void=>{
    console.log(`Your name is ${user.name} and your age is ${user.age}`);
}
const user1 : User = {     // object
    name : "jagrat",
    age : 19
}
greet(user1)
// we also define type to params and to user1 object 

// we can also use interface inside a interface 
interface Users {
  [index: number]: User;
}
//you can create a type alias for an array of User objects:
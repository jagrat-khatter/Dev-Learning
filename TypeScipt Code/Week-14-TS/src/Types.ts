// when you create a type you are creating an infinite set that 
type User5 = {
    firstName : string ;
    lastName : string ;
    age : number
}

const user5 : User5 ={
    firstName : "Jagrat" ,
    lastName : "Khatter" ,
    age : 19
}
// const user0:User5 = { This will give error despite this object being the part of set that User5 
//                          specifies, but ts dosent allow that element of set that are having something extra
//     firstName : "Darshan" ,
//     lastName : "Singh" ,
//     age : 20 ,
//     weight : 90
// }
let obj0= { // Vy doing this we can use the full potential of set created by User5 type eliminating
    // the opportunity of typescript to block this asssignment 
    firstName : "Darshan" ,
    lastName : "Singh" ,
    age : 20 ,
    weight : 90
}
const user0:User5 = obj0; // now this will not give error 


// but difference between interfaces and types are that 
// in interfaces you can implement classes in type you cannot 
// ****************    Difference ****************
// Declaration Merging:
// Interfaces can be reopened and merged (useful for extending libraries), whereas type aliases cannot 
// be merged once defined.

// Union Types:
// Type aliases can directly represent union types (e.g. type AorB = A | B), but interfaces cannot be 
// unioned in that same way.

// Extending/Implementing:
// Interfaces are primarily designed to describe the shape of objects and can be implemented by classes. 
// While type aliases can describe objects too, they cannot be "implemented" by classes.

// Flexibility:
// Type aliases are more flexible for composing complex types (including unions and intersections), 
// whereas interfaces are best suited for clearly defined object shapes.
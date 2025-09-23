
// Create two types calld User and Admin
// Create a function that takes either a User or an Admin as and input, and returns s string saying hello

interface Admin6 {
    name : string ;
    country : string;
    permissions : string ;
}

interface User6 {
    name : string ;
    country : string;
    age : number ;
}

type AorB = Admin6 | User6;

const greet2 = (var1 : AorB):void => {
    console.log("Hello" , var1.name) ;
    // but you cannot do console.log(var1.age) bcoz it is property of User6 only
    // in | either it should correspond to type A or Type B or more 

}
greet2({name : "Jagrat" , country : "China" , age : 19});
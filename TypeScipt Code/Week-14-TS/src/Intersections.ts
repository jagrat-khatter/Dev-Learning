// You can get what is right by knowing what is wrong 
type a1 ={
    brand : string ;
    model : number ;
}
type a2 ={
    price : number ;
    model : string ;
}
// let intersectionExample1: a1 & a2 = {
//     brand : "Toyota" ,
//     price : 2900000 ,
//     model :  
// }
// Type Conflict on "model":
// In type a1, model is defined as a number, while in type a2 it’s defined as a string. The intersection 
// of these types is the type that is both number and string simultaneously, which is essentially never 
// (an unsatisfiable type). In other words, no value can satisfy being both a number and a string.

// Option 1: Adjust the Types for Compatibility
// Option 2: Redefine the Intersection Type
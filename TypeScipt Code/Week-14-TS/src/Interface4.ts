// Interfaces with function 
interface People {
    name : string ,
    age : number ,
    greet : ()=> string ,

    // greet2() : string another way of writing the same function 
}
// The object person conforms to People interface
const person : People  = {
    name : "Jagrat" ,
    age : 19 ,
    greet: ()=>"Hi there "
}

console.log(person.greet()) ;

// It greets like Hi there for now but we want to Hi there Jagrat
// We can do greet: ()->"Hi there "+ person.name (Hard code the freeting)
// But what if we want to implement many such objects that conforms to same interface and greet that way
// It is better to implement a class that conforms to these interface and we'll create instance of 
// that class 
// People interface is throughout available 

interface People2 {
    name : string ,
    age : number 
    

}
class Employee implements People2 {
    constructor(public name:string , public age:number){
        this.name = name ;
        this.age = age;
    }
}
class Manager implements People2 {
    name : string;
    age : number ;
    number : string ;
    // you can add more properties but it should have minimum what is there in parent interface
    constructor (name: string , age: number , number: string = "N/A"){
        this.name = name ;
        this.age = age ;
        this.number = number
    }
}
// Creating an instance with only two arguments:
const manager1 = new Manager("Alice", 30);
// manager1.number will default to "N/A"

// Creating an instance with all three arguments:
const manager2 = new Manager("Bob", 40, "12345");
class Manager2 extends Manager {
    name : string;
    age : number ;
    number : string ;
    isLegal : ()=>boolean ;
    constructor(name: string, age: number, number: string = "N/A") {
    // Call the parent class constructor
    super(name, age, number) ;
    this.name = name ;
    this.age = age ;
    this.number = number ;
    this.isLegal = ()=>{
        if(age>=18) return true;
        else return false;
    } ;
    // you can also add argumnets to make this class more feature rich take functions as arguments and what not
    // Now you can add additional logic for Manager2 if needed.
  }
}
const manager3 = new Manager2("Hopkin" ,17 , "9989898") ;
console.log(manager3.isLegal());


// Defining an Interface (People2):
// The People2 interface acts as a contract that specifies the properties any object of that type 
// should have—in this case, a name of type string and an age of type number.

// Implementing the Interface in Classes:

// Employee Class:
// When the Employee class uses implements People2, it tells TypeScript that this class must 
// include the properties defined by People2. The constructor is declared so that when a new Employee 
// is created, a name and age are provided. TypeScript enforces that Employee actually has a name 
// and age property (which in this case is done using the shorthand public modifier in the constructor 
// parameter list).

// Manager Class:
// Similarly, the Manager class implements People2 by declaring name and age properties. In addition,
// it defines an extra property called number (e.g., perhaps a phone or employee number). Its 
// constructor accepts three arguments and assigns them to the respective properties. TypeScript 
// ensures that Manager has at least the properties specified by People2 (and it can add more as 
// needed).

// Implementation of an Interface Versus Creating an Instance:

// Implementing an Interface:
// When a class implements an interface, it commits to a certain structure. The interface is purely 
// a compile‑time construct used by TypeScript for type checking, ensuring that the class contains 
// the required properties and methods. Interfaces do not exist at runtime and are not instantiated 
// on their own.

// Creating an Instance of a Class:
// Once you implement an interface in a class, you can create instances (objects) of that class 
// using the new keyword. For example:
// const emp = new Employee("Alice", 25);
// const mgr = new Manager("Bob", 35, "123-456-7890");

// These instances are real objects with the properties defined in the class. The type checking 
// provided by the interface ensures that these objects have the properties (like name and age) 
// required by the People2 interface.


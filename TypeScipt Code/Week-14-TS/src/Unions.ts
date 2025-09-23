// When we are taking union or intersection of two types we are essentially taking union or intersect
// of their domains not their properties 
// Properties = key of object , domain = value a key can have 
type a = {
    brand : string ;
    model : number ;
}
type b = {
    price : number ;
    model : string ;
}
// UNION: A value can be either of type a OR type b.
// For example:
let unionExample1: a | b = {
  brand: "Toyota",
  model: 2022, // This object is valid as it conforms to type a.
};

let unionExample2: a | b = {
  price: 30000,
  model: "2022", // This one conforms to type b.
};
// The union doesn't require the object to satisfy both types at once.
// But any object corresponding to this a | b can have properties of both 
// Although this object has all three properties, it fits type b because type b requires:

// price: number → provided as 30000 (correct)
// model: string → provided as "2022" (correct)
// The fact that it also has a brand property (which type b does not require) is generally allowed  
// in a union assignment if the object is considered to fulfill one of the member types. (Excess property 
// checking can be more relaxed with union types.)
let unionExample3: a | b = {
  price: 30000,
  brand : "Toyota",
  model: "2022", // string – so it matches type b’s model.
};
let unionExample4: a | b = {
  price: 30000,
  brand : "Toyota",
  model: 2023, // number – so it matches type a’s model.
};

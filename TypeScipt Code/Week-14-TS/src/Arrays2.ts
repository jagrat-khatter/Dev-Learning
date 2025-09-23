interface User7 {
    firstName : string ,
    lastName  : string ,
    age : number
}
let obj1:User7 = {
    firstName : "Jagrat" ,
    lastName : "Khatter" ,
    age : 19
}
let obj2:User7 = {
    firstName : "Ishant" ,
    lastName : "Sharma" ,
    age : 21
}
let obj3 = {
    firstName : "Keshav" ,
    lastName : "Kumar" ,
    age : 12
}
const arr2:User7[] = [obj1 , obj2 , obj3] ;

for(let i=0;i<arr2.length; i++){
    (arr2[i].age >= 18 ? console.log(`${arr2[i].firstName} you are eligible to vote`) : console.log(`${arr2[i].firstName} you are not eligible to vote`))
}
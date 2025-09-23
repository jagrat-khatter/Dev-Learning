interface User2 {
    name : string , // if you wan to lock strings also theb name : "Jagrat" | "Raman"  would work 
    age : number ,
    address?: {
        city : string ,
        country : string ,
        pincode : number
    }
}
// but you cannot do 
// address : {                     //whole address key should be empty pr exist
//     pincode : 160014
// }

const Jagrat:User2 ={
    name : "Jagrat" ,
    age : 19 ,
    address : {
        city : "Chandigarh" ,
        country : "India" ,
        pincode : 160014
    }
}

console.log(Jagrat.address?.pincode);

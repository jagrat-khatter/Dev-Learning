// interfaces using other interfaces
interface Address {
    city  : string ,
    country : string ,
    pincode : number
}
interface User3 {
    name : string ,  
    age : number ,
    address : Address
}

interface Office {
    address : Address
}


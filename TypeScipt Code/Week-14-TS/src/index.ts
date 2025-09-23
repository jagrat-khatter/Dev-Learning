const callFunc = (callBack : (x:string)=>void , s : string)=>{

    // now callBack is itself a function 
    setTimeout(()=>{callBack(s)} , 2000);
}

callFunc((x:string)=>{
    console.log(x);
} , 'Jagrat')
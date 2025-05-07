try{
    let a;
    console.log("Before exception");
    console.log(a.length);
    console.log("From inside the try");
}

catch{
    console.log("");
}
// if we know an exception can be thrown and we cannot prevent it by writing better code then 
// we ue try catch
console.log("After try catch syntax");
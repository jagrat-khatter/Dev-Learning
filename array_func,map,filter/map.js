
function func(a) {return 2*a;}

function mp(arr , fn)
{
    for(let i=0;i<arr.length;i++)
    {
        arr[i] = fn(arr[i]);
    }
}

let arr=[1,2,3,4,9] ;

//map(arr , func);
console.log(arr) ;

// but map is provided as a built in fucntion in array class // syntax: input.map(transformation function)
// Now using the inbuilt map function 
const newar = arr.map(func); // this fucntion stores it it anothr array 
console.log(newar);
// filtering
// given an input array , give me back all even vales from it 
const arr= [2,3,4,5,7,9,8];
let newar=[];  
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i] % 2==0) newar.push(arr[i]);
// }

// console.log(newar) ;

// filter method
//it is a higher-order function that creates a new array with all elements that pass the test 
// implemented by the provided function.
function func(a)
{
    if(a%2==0) return true;
    else return false;
}

newar = arr.filter(func) ;      // using newar bcoz it is already declared 
console.log(newar);

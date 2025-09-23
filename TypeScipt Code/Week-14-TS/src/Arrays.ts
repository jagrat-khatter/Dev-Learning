let arr:number[] = [2,3,8,12-3];

const check = (arr:number[]):number => {
    let ans = -100000000;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > ans) ans = arr[i];

    }
    return ans;
}

console.log(check(arr));
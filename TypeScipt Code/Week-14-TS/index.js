"use strict";
const callFunc = (callBack, s) => {
    // now callBack is itself a function 
    setTimeout(() => { callBack(s); }, 2000);
};
callFunc((x) => {
    console.log(x);
}, 'Jagrat');

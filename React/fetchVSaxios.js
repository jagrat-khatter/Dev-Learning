const axios = require('axios')
// we'll use todo endpoint in Express/HTTP_Server
// full promise syntax
const main2 = ()=>{
    fetch('http://localhost:3000/todos').then((response)=> response.json()).then(data =>{
        console.log(data)
    })
    

}
// partail async await partial prommise syatax
const main3 = ()=>{
    fetch('http://localhost:3000/todos').then(async (response)=> {
        const data = await response.json();
        console.log(data);
    })
}
// full async await syntax
const main = async ()=>{
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    console.log(data);
}

const main4 = async ()=>{
    const response = await fetch('https://www.postb.in/1750753132375-6707394158001' , {
        method :"POST" ,
        headers : {
            Authorization : "Bearer"
        }
    });
    const data = await response.text(); // if we .json() here we'll get error 
    console.log(data);
}
// in fetch dev has to know which data has to come
// but axios is smart
const main5 = async ()=>{
    const response = await axios.post('https://www.postb.in/1750753132375-6707394158001')
        
    console.log(response.data);
}


//main()
//main2()
// main3();
// main4()
main5()
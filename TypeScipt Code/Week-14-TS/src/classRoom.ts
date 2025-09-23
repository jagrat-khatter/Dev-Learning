// Here function has implicitly assumed name as 'Any' data type bcoz noImplicitAny is changed to 
// false from its default true state 
// ideally it should be true 
const func = (name: any)=>{
    console.log(`Hey ${name}`)
}

func ("Jagrat");
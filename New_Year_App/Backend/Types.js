const zod = require(`zod`);

// First input we expect is
//  {
//     title : string ,
//     description : string
//  }
// Second input for marking down the todo is 
// {
//     id : string 
// }
const schema1 = zod.object({
    title : zod.string() ,
    description : zod.string()
})
const schema2 = zod.object({
    id : zod.string()
})


module.exports= {
    schema1,
    schema2
}
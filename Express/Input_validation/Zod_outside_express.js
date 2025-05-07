// zod is an independent library that can make a schema and validate input with respect to it

const zod = require(`zod`);

function validateArray(arr)
{
    const schema = zod.array(zod.number());
    const result = schema.safeParse(arr);
    if(result.success) console.log(`Array is fine`);
    else console.log(`Array is not fine `)
}

validateArray([2,5,8 , '0']);
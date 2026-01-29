import axios from "axios";

export default async function User(){
    const response = await axios.get('http://localhost:3000/api/v1/user/details')
    .then(x => x.data)

    await new Promise(x => setTimeout(x , 3000));


    return <div>{response.email}</div>

}
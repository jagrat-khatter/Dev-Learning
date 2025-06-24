import {useState} from 'react'
import {Button1} from '../components2/button1.jsx'
import {Input1} from '../components2/input1.jsx'

function APP()
{
    const [disabled , setDisabled] = useState(true);


    return (<div className='h-screen bg-darkBlue-900'>
        <div className='text-4xl font-serif text-white mx-auto w-fit py-4 mb-24'> Verify Your Age </div>
        <Input1 type={"text"} placeholder={'Your Birth Date      (DD-MM-YYYY)'} setDisabled={setDisabled} />
        <Button1  disabled={disabled} children={"Continue"}  />
        
    </div>)

}

export default APP


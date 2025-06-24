import {useState} from 'react'


function APP(){
    const [count , setCount ] = useState(null);

    return (
    <>
      <div className='bg-blue-500'>This is first div</div>
      <div className='flex justify-center'>
        <div>
          Child 1
        </div>
        <div>
          Child 2
        </div>
        <div>
          Child 3
        </div>
      </div>
    </>
  )
}

export default APP
import React , {useState , useCallback} from 'react'
export const Input1 = ({onClick , type , placeholder , setDisabled}) =>{

    const checker = useCallback((e)=>{
        if(e !== null) console.log(e.target.value);
        {
            let s = e.target.value ;
            if(s.length==10 && s[2]=='-' && s[5]=='-'){
                
                setDisabled(false);
            }
            else{
                setDisabled(true);
            }
        }
    }, [])

    return <div className={`rounded-xl  py-2 bg-darkBlue-700 w-80 mx-auto mb-4`}>
        <input onChange={checker} type={type} placeholder={placeholder} className=" w-full placeholder:text-center px-8 placeholder:text-darkBlue-600 bg-transparent outline-none text-white"></input>
        </div>
}
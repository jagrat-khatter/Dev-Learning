import {useState , useRef} from 'react';

function APP({number})
{
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
  
    const refArr = useRef(Array.fill);


    return <div className='h-screen  bg-darkBlue-900 flex justify-center py-24'>
        
        <SubOtpBox inputRef={ref1} onDone={()=>{ ref2.current.focus();}}  onBack={()=>{
            ref1.current.focus();
        }} />
        <SubOtpBox inputRef={ref2} onDone={()=>{ ref3.current.focus();}}  onBack={()=>{
            ref1.current.focus();
        }} />
        <SubOtpBox inputRef={ref3} onDone={()=>{ ref4.current.focus();}}  onBack={()=>{
            ref2.current.focus();
        }} />
        <SubOtpBox inputRef={ref4} onDone={()=>{ ref5.current.focus();}}  onBack={()=>{
            ref3.current.focus();
        }} />
        <SubOtpBox inputRef={ref5} onDone={()=>{ ref6.current.focus();}}  onBack={()=>{
            ref4.current.focus();
        }} />
        <SubOtpBox inputRef={ref6} onDone={()=>{ ref6.current.focus();}}  onBack={()=>{
            ref5.current.focus();
        }} />
           
    </div>


    
}
function SubOtpBox({inputRef , onDone , onBack}){
    
    const otpBox =(e)=>{

        let s = e.target.value ;

        if((s).length == 0){
            onBack();
        }
        else if(s.length === 1 && s[0] >= '0' && s[0]<='9'){ // comparison with help of string 
            onDone();
        }
        else if(s.length === 1){
            inputRef.current.value="";
        }
        else if(s.length >1){
            inputRef.current.value= s.slice( 0 , 1);
            onDone()
        }
    }
    return <div><input ref={inputRef} type="text" onChange={otpBox} className='w-[40px] m-1 outline-none px-4 h-[50px] rounded-2xl bg bg-darkBlue-700 text-white' /> </div>
}

export default APP
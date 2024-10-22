import { useEffect, useRef, useState } from "react"
import './Otp.css'

function Otp({ol=6})
{
    const [otpField,setotpField]=useState(new Array(ol).fill(""));
    const ref=useRef([]);
    const handlekeydown=(e,index)=>
    {
        const key=e.key;
        if(key=="ArrowLeft")
        {
            if(index>0)
                ref.current[index-1].focus();
            return;
        }
        if(key=="ArrowRight")
        {
            if(index+1<otpField.length)
                ref.current[index+1].focus();
            return;
        }
        if(key=="Backspace")
        {
            const copy=[...otpField];
            copy[index]="";
            setotpField(copy);
            if(index>0)
            ref.current[index-1].focus();
            return;
        }
        if(isNaN(key))
            return;
        const copy=[...otpField];
        copy[index]=key;
        if(index+1<otpField.length)
            ref.current[index+1].focus();
        setotpField(copy);

    }
    useEffect(()=>{
        ref.current["0"].focus();
    },[])
    return(
        <div class="container">
            {
                otpField.map((value,index)=>{
                    return <input 
                            key={index} 
                            ref={(curretInput)=> (ref.current[index]=curretInput)}
                            type="text" 
                            value={value}
                            onKeyDown={(e)=>handlekeydown(e,index)}/>
                })
            }
        </div>
    )
}

export default Otp
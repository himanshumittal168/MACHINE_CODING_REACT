import { useEffect, useRef, useState } from 'react';
import './Image.css'
import data from  './data.json'
function Image()
{
    console.log(data);
    const length=data.length;
    const [idx,setidx]=useState(0);
    const ref=useRef(null);
    const handleNext=()=>{
        setidx((pi)=>
        {
            if(pi==length-1)
                return 0;
            else
                return idx+1;
        })
    }
    const handlePrev=()=>
    {
        setidx((prevIdx) => (prevIdx === 0 ? length - 1 : prevIdx - 1));
    }
    useEffect(()=>{
        ref.current=setInterval(handleNext,500);
        return()=>{
            clearInterval(ref.current);
        }
    },[]);
    const stopInterval = () => {
        clearInterval(ref.current);
        console.log("ENTERED");
    };

    const startInterval = () => {
        ref.current = setInterval(handleNext, 500);
        console.log("REMOVED");
    };

    return(
        <>
        <div 
            
            className="container">
            <div className="left-btn" onClick={handlePrev}>{"<"}</div>
            <img 
            onMouseEnter={stopInterval} 
            onMouseLeave={startInterval}
            src={data[idx].download_url}></img>
            <div className="right-btn" onClick={handleNext}>{">"}</div>
        </div>
        </>
    )
}

export default Image;
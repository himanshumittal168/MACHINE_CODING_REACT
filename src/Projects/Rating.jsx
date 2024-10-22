import { useState } from 'react'
import './Rating.css'
function Rating({sc=5})
{
    const [starval,setstarval]=useState();
    const [hover,sethoverval]=useState(0);
    return(
        <>
        <div className="container">
            {
                new Array(sc).fill(0).map((value,index)=>{
                    return <span key={index} 
                            className={
                                (hover==0 && index<starval) || index<hover ?"gold":""}
                            onClick={()=> setstarval(index+1)}
                            onMouseEnter={()=>sethoverval(index+1)}
                            onMouseLeave={()=>sethoverval(0)}
                            >
                            &#9733;
                            
                            </span>
                })
            }
        </div>
        </>
    )
}

export default Rating
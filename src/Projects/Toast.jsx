import { useState } from "react";
import './toast.css'
function Toast()
{
    const [show,setshow]=useState();
    const [toasts,settoasts]=useState([]);
    const handleClose=(id)=>{
        // const filterArr=toasts.filter((toast)=>{
        //     return toast.id!==id;
        // })
        // settoasts(filterArr);
        settoasts((prevtoast)=>{
            const filterarr=prevtoast.filter((toast)=>{
                return toast.id!==id;
            });
            return filterarr;
        })
    };
    const handleadd=(msg,type)=>{
        // setshow(true);
        // setTimeout(handleClose,5000);

        const id=new Date().getTime();
        const newToasts=[...toasts,{id,msg,type}];
        settoasts(newToasts);
        setTimeout(()=>handleClose(id),5000);
    };
    return(
        <>
        <div className="toast-container">
            {toasts.map(({msg,id,type})=>{
                return(
                    <div key={id} className={`toast ${type}`}>
                    {msg}
                        <span onClick={()=> handleClose(id)}>X</span>
                    </div>
                )
            })}
        </div>
        <div className="btn-container">
            <button onClick={()=>handleadd("Success","success")}>Success</button>
            <button onClick={()=>handleadd("Info","info")}>Info</button>
            <button onClick={()=>handleadd("Warning","warning")}>Warning</button>
            <button onClick={()=>handleadd("Error","error")}>Error</button>
        </div>
        </>
    )
}
export default Toast;
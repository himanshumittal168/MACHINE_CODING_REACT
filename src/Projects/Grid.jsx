import './Grid.css'
import { useEffect, useRef, useState } from 'react';

function Grid()
{
    const [grid,setgrid]=useState(Array.from({length:3},()=>new Array(3).fill(false)));
    const queue=useRef([]);
    const handleonClick=(rowidx,colidx,flag)=>
    {
        if(grid[rowidx][colidx] && flag)
            return;
        setgrid((pg)=>{    
            const gridDeepcopy=pg.map((row)=>[...row]);
            if(flag)
                queue.current.push([rowidx,colidx]);
            gridDeepcopy[rowidx][colidx]=flag;
            return gridDeepcopy;
        })
    }

    useEffect(()=>{
        if(queue.current.length===9)
        {
            queue.current.forEach(([rowidx,colidx],idx)=>{
                setTimeout(()=>handleonClick(rowidx,colidx,false),1000*(idx+1))
            })
            queue.current=[];
        }
    },[grid])
    return(
        <>
            <div className='container'>
                {grid.map((row,rowidx)=>{
                    return row.map((cell,colidx)=>{
                        return (<div 
                                className={`cell ${cell? "active":""}`}
                                onClick={()=>handleonClick(rowidx,colidx,true)} 
                                key={`${rowidx}-${colidx}`}></div>)
                    })
                })}
            </div>
        </>
    )
}


export default Grid;
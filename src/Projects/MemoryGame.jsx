import { useEffect, useState } from 'react';
import './MemoryGame.css'

function MemoryGame()
{
    
    const [cards,setCards]=useState(GenerateGrid());
    const [isLock,setisLock]=useState(false);
    const [FlippedCard,setFlippedCard]=useState([]);
    const handleclick=(index)=>
    {
        if(cards[index].isFlipped || isLock) 
            return;
        const copycards=[...cards];
        copycards[index].isFlipped=true;
        setCards(copycards);
        setFlippedCard([...FlippedCard,index])
    }
    useEffect(()=>{
        if(FlippedCard.length===2)
        {
            setisLock(true);
            setTimeout(()=>{
                if(cards[FlippedCard[0]].number!==cards[FlippedCard[1]].number)
                {
                    setCards((pc)=>
                    {
                        const copy=[...pc];
                        copy[FlippedCard[0]].isFlipped=false;
                        copy[FlippedCard[1]].isFlipped=false;
                        return copy;
                    })
                }
                setisLock(false);
                setFlippedCard([])
            },1000);
        }
    },[FlippedCard])
    return(
        <div class='grid-container'>
        {
            cards.map(({id,number,isFlipped})=>{
                return <div className={`cards ${isFlipped?"active":""}`} key={id} onClick={()=>handleclick(id)}>{isFlipped? number:"?"}</div>
            })
        }
        </div>
    )
}

function GenerateGrid()
{
    const arr=Array.from({length:18},(_,index)=>index+1);
    const grid=[...arr,...arr].sort(()=>Math.random()-0.5);
    const cards=grid.map((item,index)=>{
        return {id:index,number:item,isFlipped:false};
    });
    return cards;
}

export default MemoryGame;
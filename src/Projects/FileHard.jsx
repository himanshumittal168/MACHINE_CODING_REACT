import { useContext, useState } from 'react';
import './FileHard.css'
import { FileExplorerContext } from './context/FileExplorerContext';
function FileHard({id=1})
{
    const [showChildren,setShowChildren]=useState(false)
    const {nodes}=useContext(FileExplorerContext);
    const handleClick=()=>
    {
        setShowChildren(!showChildren);
    }
    return(
        <div className='container'>
            <h6>
                {nodes[id].type==='folder'?(showChildren ? "📂" : "📁") : "📄"}
                <span onClick={handleClick}>{nodes[id].name}</span>
            </h6>
            {
                showChildren &&
                nodes[id]?.children.map((childId,index)=>{
                    return <FileHard key={index} id={childId}></FileHard>
                })
            }
        </div>
    )
}

export default FileHard;
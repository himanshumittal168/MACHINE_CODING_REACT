import { useState } from 'react'

export default function useComment(comment)
{

    const [cmtdata,setcmtdata]=useState(comment.comments);
    const addComment=(value,parentId)=>{
        console.log("ADD")
        const newid=Date.now();
        const newComment={ id:newid, value,parentId,children:[]}
        setcmtdata((pc)=>{
          const updatedComment={...pc,[newid]:newComment};
          updatedComment[parentId].children.push(newid);
          return updatedComment;
        });
    }
    
    const deleteComment=(id)=>
      {
        const pid=cmtdata[id].parentId;
        setcmtdata((pc)=>{
          const updatedComment={...pc};
          updatedComment[pid].children=updatedComment[pid].children.filter((childId)=>{
            return childId!==id;
          })
    
          const queue=[id];
          while(queue.length>0)
          {
            const nodetoDelete=queue.shift();
            queue.push(...updatedComment[nodetoDelete].children);
            delete  updatedComment[nodetoDelete];
          }
          return updatedComment;
        })
    }

    return {cmtdata,deleteComment,addComment};
    
}
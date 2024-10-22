import { useState } from 'react'
import './NestedComment.css'

function NestedComment({comment,allcomment,addComment,deleteComment})
{
    const [showreplybox,setshowreplybox]=useState(false);
    const handlereplyclick=()=>
    {
        setshowreplybox(!showreplybox);
    }
    return(
        <div className='comment-container'>
            <div className='comment-header'>
                <p className='comment-value'>{comment.value}</p>
                <div className='comment-actions'>
                    <button className='reply-btn' onClick={handlereplyclick}>
                        {showreplybox?"Cancel":"Reply"}</button>
                    <button className='delete-btn'  onClick={()=>deleteComment(comment.id)}>Delete</button>
                </div>
            </div>
            <CommentBox></CommentBox>
            {showreplybox &&<ReplyComment setshowreplybox={setshowreplybox} addComment={addComment} id={comment.id}></ReplyComment>}
            <div className='nested-comments'>
                {comment.children.map((childId)=>{
                    return <NestedComment key={childId} comment={allcomment[childId]} allcomment={allcomment} addComment={addComment} deleteComment={deleteComment}></NestedComment>
                })}
            </div>
        </div>
    )
}


function CommentBox()
{
    return(
        <>
        </>
    )
}

function ReplyComment({setshowreplybox, addComment,id})
{
    const [reply,setreply]=useState("");
    const handlepostreply=()=>{
        setreply("");
        setshowreplybox(false);
        addComment(reply,id);
    }
    return(
        <div className='reply-form'>
            <textarea 
                className='reply-textarea' 
                value={reply} 
                placeholder="Write Your Reply here..." 
                onChange={(e)=>setreply(e.target.value)}
                onKeyDown={(e)=>{
                                    if(e.key==="Enter")
                                    {
                                        e.preventDefault();
                                        handlepostreply()
                                    }
                                }}>
            </textarea>
            <button className='post-reply-btn' onClick={handlepostreply}>Post Reply</button>
        </div>
    )

}

export default NestedComment;

import React from 'react';


const CommentList = ({comments}) => {
    const renderedComments = comments.map((comment)=>{
        if(comment.status ==='rejected'){
            return <li key={comment.id}>This comment is rejected</li>
        }
        if (comment.status === 'pending'){
            return <li key={comment.id}>This comment is Awaiting moderation</li>
        }
        return <li key={comment.id}>{comment.content}</li>
    })
    return (
        <div>
            <ul>
                {renderedComments}
            </ul>
        </div>
    );
}
export default CommentList;
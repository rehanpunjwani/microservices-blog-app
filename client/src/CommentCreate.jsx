import React,{useState} from 'react';
import axios from 'axios';

const CommentCreate= ({postId})=>{
    const [content, setContent] = useState('');
    const onSubmit = async (event)=>{
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`,{content});
        setContent('');

    }

    return (
    <div>
        <form onSubmit={onSubmit} className ="form-group" >
            <label>New Comments</label>
            <input value={content} onChange={e =>setContent(e.target.value)} type="text" className="form-control"/>    
            <button className="btn btn-primary mt-2">Submit</button> 
        </form>

    </div>);

}
export default CommentCreate;
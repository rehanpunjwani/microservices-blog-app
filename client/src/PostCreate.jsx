import React, { createContext, useState } from 'react';
import axios from 'axios';
const Wrapper = createContext();

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://posts.com/posts/create', { title });
    setTitle('');
  };
  return (
    <Wrapper.Provider value={'rehan'}>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title </label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </Wrapper.Provider>
  );
};
export default PostCreate;
export { Wrapper };

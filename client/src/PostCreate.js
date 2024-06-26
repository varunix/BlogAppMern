import React from "react";
import { useState } from "react";
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
        title
    });

    setTitle('');
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label><h4>Title</h4></label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

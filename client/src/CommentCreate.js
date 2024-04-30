import axios from 'axios';
import React, { useState } from 'react';

export default ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label style={{ marginBottom: '10px' }}>New Comment</label>
                    <input value={content} onChange={e => setContent(e.target.value)} className='form-control' />
                </div>
                <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
};
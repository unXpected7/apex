import React, { useState } from 'react';
import axios from 'axios';
const BaseUrl = process.env.BASE_URL_API || 'http://localhost:5000';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    axios.post(`${BaseUrl}/api/posts`, formData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        className="w-full p-2 border rounded mb-4"
        placeholder="What's on your mind?" 
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        className="mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
};

export default CreatePost;

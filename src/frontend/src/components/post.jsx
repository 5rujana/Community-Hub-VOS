import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [caption, setCaption] = useState('');
  const [postFile, setPostFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState(null);

  const handlePostCreation = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('caption', caption);
    if (postFile) formData.append('postFile', postFile);
    if (thumbnail) formData.append('thumbnail', thumbnail);
    
    const token = localStorage.getItem('token');
    
    try {
      await axios.post('http://localhost:4050/api/v1/posts/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      onPostCreated(); // Trigger refetch of posts
    } catch (err) {
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <form onSubmit={handlePostCreation} className="p-4">
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Caption"
        required
        className="block text-wrap w-full px-10 py-10 mb-2 border border-purple-500 rounded-md"
      />
      <input
        type="file"
        onChange={(e) => setPostFile(e.target.files[0])}
        required
        className="block w-full mb-2"
      />
      <input
        type="file"
        onChange={(e) => setThumbnail(e.target.files[0])}
        className="block w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Publish Post
      </button>
    </form>
  );
};

export default CreatePost;

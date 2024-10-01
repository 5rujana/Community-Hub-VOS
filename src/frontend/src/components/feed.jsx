import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedItem from "./feedItem";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('feed');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const token = localStorage.getItem('token');
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:4050/api/v1/posts/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data.posts);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      setIsLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen p-4 w-1/2">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center border-b-[1px] border-[#000000] pb-2 mb-4">
          <div className="relative">
            <button 
              className={`text-[20px] font-bold px-4 py-2 rounded-[8px] ${
                activeTab === 'feed' 
                  ? 'text-[#000000] bg-[#e0e0e0]' 
                  : 'text-[#b3b3b3] bg-transparent'
              } hover:bg-[#d4d4d4] focus:outline-none focus:ring-2 focus:ring-[#000000]`}
              onClick={() => handleTabChange('feed')}
            >
              Feed
            </button>
            {activeTab === 'feed' && (
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[8px] opacity-10"></div>
            )}
          </div>
          <div className="relative">
            <button 
              className={`text-[20px] font-bold px-4 py-2 rounded-[8px] ${
                activeTab === 'replies' 
                  ? 'text-[#000000] bg-[#e0e0e0]' 
                  : 'text-[#b3b3b3] bg-transparent'
              } hover:bg-[#d4d4d4] focus:outline-none focus:ring-2 focus:ring-[#000000]`}
              onClick={() => handleTabChange('replies')}
            >
              Replies
            </button>
            {activeTab === 'replies' && (
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000] rounded-[8px] opacity-10"></div>
            )}
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          posts.map((post) => (
            <FeedItem key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function FeedItem({ post }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [newComment, setNewComment] = useState('');

  const postId = post._id;
  const API_URL = import.meta.env.VITE_API_URL;
  const token = Cookies.get('accessToken');

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchPostData() {
      try {
        const commentResponse = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`, axiosConfig);
        setComments(commentResponse.data.comments || []);
      } catch (err) {
        console.error('Error fetching comments', err);
      }

      try {
        const likeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/likes/${postId}`, axiosConfig);
        setLikes(likeResponse.data.likes || 0);
      } catch (err) {
        console.error('Error fetching likes', err);
      }

      try {
        const isLikedResponse = await axios.get(`${import.meta.env.VITE_API_URL}/likes/isLiked/${postId}`, axiosConfig);
        setIsLiked(isLikedResponse.data.isLiked);
      } catch (err) {
        console.error('Error fetching like status', err);
      }
    }
    fetchPostData();
  }, [postId]);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await axios.delete(`${API_URL}/likes/${postId}`, axiosConfig);
        setLikes((prevLikes) => prevLikes - 1);
      } else {
        await axios.post(`${API_URL}/likes/${postId}`, null, axiosConfig);
        setLikes((prevLikes) => prevLikes + 1);
      }
      setIsLiked(!isLiked);
    } catch (err) {
      console.error('Error updating like:', err);
    }
  };

  const handleComment = () => {
    setShowCommentPopup(true);
  };

  const handleShare = () => {
    alert('Sharing this post!');
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const commentData = { text: newComment };
        const newCommentResponse = await axios.post(
          `${API_URL}/comments/${postId}`,
          commentData,
          axiosConfig
        );
        setComments((prevComments) => [...prevComments, newCommentResponse.data.comment]);
        setNewComment('');
      } catch (err) {
        console.error('Error adding new comment', err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-[8px] shadow-md">
        <div className="flex items-start space-x-4">
          <img
            src={post.authorAvatar || 'https://picsum.photos/50'}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="text-[16px] font-bold text-[#000000]">
                {post.authorName}
              </div>
              <div className="text-[14px] text-[#b3b3b3]">{post.timeAgo}</div>
            </div>
            <div className="text-[16px] text-[#000000]">{post.content}</div>
            {post.image && (
              <img
                src={post.image}
                alt="event"
                className="w-full mt-2 rounded-[8px]"
              />
            )}
            <div className="flex items-center space-x-4 mt-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className={`text-[20px] ${
                  isLiked ? 'text-red-500' : 'text-[#000000]'
                }`}
              >
                <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleComment}
                className="text-[20px] text-[#000000]"
              >
                <i className="far fa-comment"></i>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="text-[20px] text-[#000000]"
              >
                <i className="fas fa-share"></i>
              </motion.button>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <img
                src="https://picsum.photos/20"
                alt="profile"
                className="w-5 h-5 rounded-full"
              />
              <img
                src="https://picsum.photos/20"
                alt="profile"
                className="w-5 h-5 rounded-full"
              />
              <div className="text-[14px] text-[#000000]">
                {comments.length} replies • {likes} likes
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCommentPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div className="bg-white p-4 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">Comments</h2>
              <div className="max-h-60 overflow-y-auto mb-4">
                {comments.map((comment) => (
                  <div key={comment._id} className="mb-2">
                    <strong>{comment.author}: </strong>
                    {comment.text}
                  </div>
                ))}
              </div>
              <form
                onSubmit={handleSubmitComment}
                className="flex items-center"
              >
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Post
                </button>
              </form>
              <button
                onClick={() => setShowCommentPopup(false)}
                className="mt-4 text-blue-500 hover:text-blue-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
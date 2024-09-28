import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedItem({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    setShowCommentPopup(true);
  };

  const handleShare = () => {
    alert('Sharing this post!');
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment, author: 'Current User' }]);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-[8px] shadow-md">
        <div className="flex items-start space-x-4">
          <img
            src={post.authorAvatar || "https://picsum.photos/50"}
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
            <div className="text-[16px] text-[#000000]">
              {post.content}
            </div>
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
                className={`text-[20px] ${isLiked ? 'text-red-500' : 'text-[#000000]'}`}
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
                  <div key={comment.id} className="mb-2">
                    <strong>{comment.author}: </strong>
                    {comment.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmitComment} className="flex items-center">
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

import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import "./post.css"
// Set the app element for accessibility
Modal.setAppElement('#root');

export default function SideBar() {
  const [activeButton, setActiveButton] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    console.log(`${buttonName} button clicked`);
  };

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent('');
    setPostImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(e.target.files[0]);
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    
    if (!postImage) {
      alert("Image is mandatory. Please select an image for your post.");
      return;
    }
  
    const formData = new FormData();
    formData.append('content', postContent);
    formData.append('image', postImage);
  
    try {
      const response = await axios.post('https://your-api-endpoint.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add any authentication headers if required
        }
      });
      console.log('Post created:', response.data);
      closeModal();
      // You might want to update the feed or show a success message here
    } catch (error) {
      console.error('Error creating post:', error);
      alert("An error occurred while creating the post. Please try again.");
    }
  };
  

  const buttons = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Explore', icon: 'fas fa-hashtag' },
    { name: 'Notifications', icon: 'fas fa-bell' },
    { name: 'Messages', icon: 'fas fa-envelope' },
    { name: 'Bookmarks', icon: 'fas fa-bookmark' },
    { name: 'Lists', icon: 'fas fa-list' },
    { name: 'Profile', icon: 'fas fa-user' },
    { name: 'More', icon: 'fas fa-ellipsis-h' },
  ];

  return (
    <div className="bg-white w-1/5 p-6">
      <div className="text-center cursor-pointer">
        <h1 className="text-[#ff7f1d] text-4xl font-bold">Community</h1>
        <h2 className="text-[#0a0a23] text-5xl font-bold">Hub</h2>
      </div>
      <nav className="mt-10">
        <ul className="space-y-6">
          {buttons.map((button) => (
            <li
              key={button.name}
              className={`flex items-center space-x-3 cursor-pointer transition-colors duration-200 ease-in-out
                ${activeButton === button.name ? 'text-[#5c2d91]' : 'text-[#333333] hover:text-[#5c2d91]'}`}
              onClick={() => handleButtonClick(button.name)}
            >
              <i className={`${button.icon} ${activeButton === button.name ? 'text-[#5c2d91]' : ''}`}></i>
              <span className="text-xl font-semibold">{button.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-10 text-center">
        <button
          className="bg-[#5c2d91] text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md
            hover:bg-[#4a2475] transition-colors duration-200 ease-in-out"
          onClick={handlePostClick}
        >
          Post
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Post"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmitPost}>
          <div className="mb-4">
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="What's on your mind?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#5c2d91] rounded hover:bg-[#4a2475]"
            >
              Post
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

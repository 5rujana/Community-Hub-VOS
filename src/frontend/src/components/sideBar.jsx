import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import "./post.css"
import CreatePost from './post';
// Set the app element for accessibility
Modal.setAppElement('#root');

export default function SideBar() {
  const [activeButton, setActiveButton] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    console.log(`${buttonName} button clicked`);
  };

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostCreated = () =>{
    closeModal();
    console.log("Post created");
  }

  const buttons = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Explore', icon: 'fas fa-hashtag' },
    { name: 'Notifications', icon: 'fas fa-bell' },
    { name: 'Messages', icon: 'fas fa-envelope' },
    { name: 'Bookmarks', icon: 'fas fa-bookmark' },
    { name: 'Profile', icon: 'fas fa-user' },
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
        <CreatePost onPostCreated={handlePostCreated} />
      </Modal>
    </div>
  );
}
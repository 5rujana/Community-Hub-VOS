// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="csi_logo.enc.jpg" alt="logo" className="h-500 w-500" />
          <span className="text-white text-lg font-bold">CSI X VIT AP</span>
        </div>
        <div className="space-x-8 text-white">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About Us</a>
          <a href="#quick-links" className="hover:text-orange-400">Quick Links</a>
          <a href="#team" className="hover:text-orange-400">Team</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

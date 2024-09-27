import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch random images using an API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all([
          axios.get('https://picsum.photos/800/400'),
          axios.get('https://picsum.photos/800/400'),
          axios.get('https://picsum.photos/800/400'),
        ]);

        setImages(responses.map((response) => response.config.url));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative bg-gradient-to-br from-purple-500 via-white to-orange-100 min-h-screen pt-16">
      {/* Increased top padding to create space between navbar and HeroSection */}
      {/* Hero Section with Blur Border */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden backdrop-blur-sm p-10 mt-12">
        {/* Blurred Border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-white blur-2xl -z-10"></div>

        {/* Content on top of background */}
        <div className="relative z-10 container mx-auto py-12 flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-purple-900 text-6xl font-extrabold leading-tight">
              Ancient Glacier Melts in Iceland.
            </h1>
            <h2 className="text-orange-500 text-5xl font-bold">
              Tourism Disrupted!
            </h2>
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              In a worrying sign of climate change, Iceland's Okjökull glacier, estimated to be thousands of years old, has officially been declared extinct. Scientists attribute the rapid melt to rising global temperatures, but concerns are mounting as nearby volcanic activity threatens to accelerate the process further.
            </p>
            <div className="mt-7">
              <a
                href="#learn-more"
                className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-orange-600 transition"
              >
                Know More...
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            {images.length > 0 ? (
              <img
                src={images[currentIndex]}
                alt="Glacier"
                className="rounded-lg shadow-2xl w-full transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <p>Loading images...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

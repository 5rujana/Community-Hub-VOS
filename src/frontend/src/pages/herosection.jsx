import React, { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import CasCards from '../components/CasCards'
import axios from 'axios';


const HeroSection = () => {
  const [news, setNews] = useState()
  const API_KEY = 'a90915cbc05b4471b5d94a7152c6d176';
  const getNews = async()=>{
    await fetch(`https://newsapi.org/v2/everything?q=Technology&pageSize=1&page=2&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => setNews(data.articles))

  }

  useEffect(()=>{
    getNews()
  },[])


  return (
    <div className="relative bg-gradient-to-br from-purple-500 via-white to-orange-100 min-h-screen pt-16">
      {/* Increased top padding to create space between navbar and HeroSection */}
      {/* Hero Section with Blur Border */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden backdrop-blur-sm p-10 mt-12">
        {/* Blurred Border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-white blur-2xl -z-10"></div>

        {/* Content on top of background */}
        <Carousel transition={{ duration: 2 }} className="rounded-xl">
          <CasCards data = {news} />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;

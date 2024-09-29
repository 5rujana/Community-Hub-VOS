import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CasCards from '../components/CasCards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const HeroSection = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=india&from=2024-08-29&sortBy=publishedAt&apiKey=a90915cbc05b4471b5d94a7152c6d176');
        setNews(response.data.articles.slice(0, 3));
      } catch (error) {
        setError(error.message);
      }
    };
    fetchNews();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-500 via-white to-orange-100 min-h-140 pt-16">
      <div className='flex flex-row gap-16 ml-10 mr-10 mb-10'>
        {news.map((article, index) => (
        <div key={index} className="card">
          <CasCards data = {article} />
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
        
    </div>
  );
};

export default HeroSection;

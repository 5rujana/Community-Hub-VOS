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
        // const response = await axios.get(`${import.meta.env.VITE_API_NEWS_URL}`);
        const response = {
          status: "ok",
          totalResults: 29462,
          articles: [
              {
                  "source": {
                      "id": null,
                      "name": "International Business Times"
                  },
                  "author": "Shaun TANDON",
                  "title": "Trump Rides Global Wave Of Anti-incumbency",
                  "description": "Incumbent leaders used to have the edge. Kane noted that incumbents still won overwhelmingly in the US Congress, and he expected future presidents to enjoy an incumbency advantage in more stable times.",
                  "url": "https://www.ibtimes.com/trump-rides-global-wave-anti-incumbency-3750127",
                  "urlToImage": "https://d.ibtimes.com/en/full/4560130/under-outgoing-president-joe-biden-us-economic-growth-has-topped-developed-world-despite-high.jpg",
                  "publishedAt": "2024-11-08T01:36:14Z",
                  "content": "Incumbent leaders used to have the edge. In the United States, the power of the Oval Office and glamour of Air Force One once made presidents the prohibitive favorites to win reelection.\r\nWith Donald… [+3999 chars]"
              },
              {
                  "source": {
                      "id": null,
                      "name": "Digital Journal"
                  },
                  "author": "AFP",
                  "title": "Trump rides global wave of anti-incumbency",
                  "description": "Incumbent leaders used to have the edge. In the United States, the power of the Oval Office and glamour of Air Force One once made presidents the prohibitive favorites to win reelection. With Donald Trump’s defeat of Kamala Harris, Republican and Democratic p…",
                  "url": "https://www.digitaljournal.com/world/trump-rides-global-wave-of-anti-incumbency/article",
                  "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/11/b8dd010e6acf36224249d2251a87acd885d4064b.jpg",
                  "publishedAt": "2024-11-08T01:35:33Z",
                  "content": "Republican Donald Trump won the US election to take back power from the incumbent Democratic President Joe Biden - Copyright AFP/File SAUL LOEB\r\nIncumbent leaders used to have the edge. In the United… [+4202 chars]"
              },
              {
                  "source": {
                      "id": "the-times-of-india",
                      "name": "The Times of India"
                  },
                  "author": "ET Bureau",
                  "title": "Key market indices climb down from Trump Tower",
                  "description": "India's equity benchmarks fell on Thursday, driven by rising US bond yields and continued selling by foreign investors. The surge in US yields, triggered by Donald Trump's election victory, has raised concerns about potential slowdowns in US rate cuts, impact…",
                  "url": "https://economictimes.indiatimes.com/markets/stocks/news/key-market-indices-climb-down-from-trump-tower/articleshow/115067580.cms",
                  "urlToImage": "https://img.etimg.com/thumb/msid-115067587,width-1200,height-630,imgsize-1186986,overlay-etmarkets/articleshow.jpg",
                  "publishedAt": "2024-11-08T01:35:27Z",
                  "content": "India's equity benchmark indices dipped on Thursday, reversing the previous day's gains, as rising yields on US bonds and continued selling by foreigners kept investors on the edge. The spike in the … [+2138 chars]"
              },
            ]
            }
        setNews(response.articles.slice(0, 3));
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

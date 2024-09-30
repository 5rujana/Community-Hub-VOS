import NavBar from '../components/NavBar'
import gear from '../assets/gear.png'
import logo from '../assets/logo.png'
import search from '../assets/search-icon.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const ThreadsPage = () => {

  const [posts, setThreads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4050/api/v1/threads/all', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('accessToken')}`
      },
    })
      .then((response) => {
        setThreads(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }
  , []);



  return (
    <div className="relative h-screen w-screen">
        <NavBar />
        {/* 
        <div className='absolute w-11/12 h-16 top-24 left-16 rounded-full bg-gray2'>
            <input type="search" id="search" className="bg-gray2 border border-gray3 text-gray3 font-serif font-normal text-3xl rounded-md relative h-full w-full p-2.5" placeholder="Search Question" />
        </div>
        */}

        <div className="absolute bg-gray4 h-100 w-80 top-28 left-16 rounded-3xl">
          <div className = "relative">
          <input type="search" id="search" className="bg-gray2 border border-gray3 text-gray3 font-serif font-normal text-l rounded-full h-10 w-72 p-2.5 pl-12 mx-4 my-6" placeholder="Search Topic" />
          <img src={search} alt="search" className="absolute left-8 top-8 h-6 w-5 text-gray-500" />
          </div>
          <div className="flex flex-row items-center gap-x-36">
            <p className='text-purple-900 text-xl font-serif font-black mx-5'>Hot Topics</p>
            <a href=""><img src={gear} alt="" className='h-6 w-6' /></a>
          </div>
          
        </div>
        <div className="absolute bg-white h-28 w-170 top-28 py-4 left-98 rounded-3xl">
          <div className="flex flex-row items-center mt-5 mx-4">
            <img src={logo} alt="" className='h-10' />
            <input  type="search" id="search" className="bg-gray2 ms-4 border border-gray3 text-gray3 font-serif font-normal text-l rounded-full relative h-10 w-[850px] px-5 py-2.5" placeholder="Do you want to share your thoughts?" />
            <button className = " ms-4 bg-purple-900 text-white pl-5 pr-5 pt-2 pb-2 rounded-full hover:bg-purple-800 active:bg-purple-900 "> Post </button>
          </div>
          {/*<div className='flex flex-row justify-center items-center gap-28 mt-3'>
              <button>
                <img src={ask} alt="Ask" className='h-8 w-20' />
              </button>
              <p className='text-2xl text-gray3'>|</p>
              <button>
                <img src={answer} alt="Answer" className='h-9 w-24' />
              </button>
              <p className='text-2xl text-gray3'>|</p>
              <button>
                <img src={post} alt="Post" className='h-7 w-24' />
              </button>
            </div> */}

        </div>
        <div className="absolute bg-white h-100 w-170 top-[250px] left-98 rounded-3xl">
        {posts.map((post) => (
            <div key={post._id} className="border-b border-gray-300 pb-4 mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={post.owner.avatar}
                  alt={post.owner.username}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-lg">{post.owner.username}</p>
                  <p className="text-sm text-gray-500">{post.owner.email}</p>
                </div>
              </div>
              <p className="text-gray-800">{post.content}</p> {/* Display post content */}
              <p className="text-sm text-gray-400 mt-2">
                Posted on: {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ThreadsPage
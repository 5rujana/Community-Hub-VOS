import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // Ensure you have this component or remove it
import gear from '../assets/gear.png'; // Ensure the image exists or update the path
import search from '../assets/search-icon.svg'; // Ensure the image exists or update the path
import logo from '../assets/logo.png'; // Ensure the image exists or update the path

const ThreadsPage = () => {
  const [posts, setPosts] = useState([]); // Store posts

  // Fetch existing posts from the server
  const fetchPosts = async () => {
    // Simulate API response
    const data = [
      {
        _id: "66e01c2d3bf0d16daa0737b7",
        content: "Hello people, this my first thread",
        owner: {
          email: "srujanagayatri76@gmail.com",
          username: "jackma",
          avatar: "http://res.cloudinary.com/dhkmytjqx/image/upload/v1725963290/u62vd1xgpypyxetsoafm.png"
        },
        createdAt: "2024-09-10T10:15:09.318Z",
        updatedAt: "2024-09-10T10:15:09.318Z"
      }
    ];
    setPosts(data);
  };

  // Fetch posts when the component is first mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <NavBar />

      {/* Search Bar */}
      <div className="absolute bg-gray4 h-100 w-80 top-28 left-16 rounded-3xl">
        <div className="relative">
          <input
            type="search"
            id="search"
            className="bg-gray2 border border-gray3 text-gray3 font-serif font-normal text-l rounded-full h-10 w-72 p-2.5 pl-12 mx-4 my-6"
            placeholder="Search Topic"
          />
          <img src={search} alt="search" className="absolute left-8 top-8 h-6 w-5 text-gray-500" />
        </div>
        <div className="flex flex-row items-center gap-x-36">
          <p className="text-purple-900 text-xl font-serif font-black mx-5">Hot Topics</p>
          <a href="">
            <img src={gear} alt="" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Post Input Section */}
      <div className="absolute bg-white h-28 w-170 top-28 py-4 left-98 rounded-3xl">
        <div className="flex flex-row items-center mt-5 mx-4">
          <img src={logo} alt="" className='h-10' />
          <input
            type="search"
            id="search"
            className="bg-gray2 ms-4 border border-gray3 text-gray3 font-serif font-normal text-l rounded-full relative h-10 w-[850px] px-5 py-2.5"
            placeholder="Do you want to share your thoughts?"
          />
          <button className="ms-4 bg-purple-900 text-white pl-5 pr-5 pt-2 pb-2 rounded-full hover:bg-purple-800 active:bg-purple-900"> Post </button>
        </div>
      </div>

      {/* Posts List */}
      <div className="absolute bg-white h-100 w-170 top-[250px] left-98 rounded-3xl p-4">
        <h2 className="text-xl font-bold mb-4">Posts:</h2>
        <div className="space-y-4">
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
    </div>
  );
};

export default ThreadsPage;

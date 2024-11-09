import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // Ensure you have this component or remove it
import gear from '../assets/gear.png'; // Ensure the image exists or update the path
import search from '../assets/search-icon.svg'; // Ensure the image exists or update the path
import logo from '../assets/logo.png'; // Ensure the image exists or update the path
import axios from 'axios';
import Cookies from 'js-cookie';

const ThreadsPage = () => {
  const [posts, setPosts] = useState([]); // Store posts
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [commentInput, setCommentInput] = useState(''); // Track comment input
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state
  const postsPerPage = 3; // Limit posts displayed per page to 3
  const [newPost, setNewPost] = useState([]); 

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  const TriggernewPost = () => {
    const postData = {
      content: newPost,
    };

    axios.post(`${import.meta.env.VITE_API_URL}/api/v1/threads/`, postData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('accessToken')}`,
      }
    }).then((response) => {
      fetchPosts();
      setNewPost('');
    }).catch((error) => {
        console.error('Error posting data:', error);
    });
  };

  const fetchPosts = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/threads/all`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('accessToken')}`,
      },
    })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while posts are being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if API call fails
  }

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle likes
  const handleLike = (index) => {
    const updatedPosts = [...posts];
    if (!updatedPosts[index].likes) {
      updatedPosts[index].likes = 0;
    }
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  // Handle comments
  const handleComment = (index, comment) => {
    const updatedPosts = [...posts];
    if (!updatedPosts[index].comments) {
      updatedPosts[index].comments = [];
    }
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  return (
    <div className="relative h-screen w-screen">
      <NavBar />

      {/* Search Bar */}
      <div className="absolute bg-gray-200 h-20 w-80 top-28 left-16 rounded-3xl">
        <div className="relative">
          <input
            type="search"
            className="bg-gray-100 border border-gray-300 text-gray-600 font-serif font-normal text-lg rounded-full h-10 w-72 p-2.5 pl-12 mx-4 my-6"
            placeholder="Search Topic"
          />
          <img src={search} alt="search" className="absolute left-8 top-8 h-6 w-5 text-gray-500" />
        </div>
      </div>

      {/* Post Input Section */}
      <div className="absolute bg-white h-28 w-170 top-28 py-4 left-96 rounded-3xl">
        <div className="flex flex-row items-center mt-5 mx-4">
          <img src={logo} alt="" className="h-10" />
          <input
            type="search"
            className="bg-gray-100 ms-4 border border-gray-300 text-gray-600 font-serif font-normal text-lg rounded-full h-10 w-[850px] px-5 py-2.5"
            placeholder="Do you want to share your thoughts?"
            value={newPost}
            onChange={handleInputChange}
          />
          <button onClick={TriggernewPost} className="ms-4 bg-purple-900 text-white pl-5 pr-5 pt-2 pb-2 rounded-full hover:bg-purple-800 active:bg-purple-900">
            Post
          </button>
        </div>
      </div>

      {/* Posts List with Pagination */}
      <div className="absolute bg-white h-[calc(100vh-300px)] w-170 top-[250px] left-96 rounded-3xl p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Threads</h2>
        <div className="space-y-4">
          {currentPosts.map((post, index) => (
            <div key={post._id} className="border-b border-gray-300 pb-4 mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={post.owner.avatar}
                  alt={post.owner.username}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-lg">{post.owner.username}</p>
                </div>
              </div>
              <p className="text-gray-900 font-bold">{post.content}</p> {/* Bold the post content */}

              {/* Like and Comment Section */}
              <div className="mt-4">
                <span
                  onClick={() => handleLike(index)}
                  className="mr-4 cursor-pointer text-xl hover:text-red-600"
                >
                  ❤️ {post.likes ? `(${post.likes})` : ''}
                </span>
                <span
                  onClick={() => {
                    // Toggle comment input visibility
                    const commentDiv = document.getElementById(`comment-input-${index}`);
                    commentDiv.style.display = commentDiv.style.display === 'none' ? 'block' : 'none';
                  }}
                  className="cursor-pointer text-xl hover:text-blue-600"
                >
                  💬
                </span>
              </div>

              {/* Comment Input */}
              <div id={`comment-input-${index}`} className="mt-2 hidden">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />
                <button
                  className="mt-2 bg-purple-900 text-white rounded-lg px-4 py-1 hover:bg-purple-800"
                  onClick={() => {
                    handleComment(index, commentInput);
                    setCommentInput('');
                  }}
                >
                  Comment
                </button>
              </div>
              <div className="mt-2">
                {post.comments &&
                  post.comments.map((comment, idx) => (
                    <p key={idx} className="text-gray-600 ml-4">• {comment}</p>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800 disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
            className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800 disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadsPage;


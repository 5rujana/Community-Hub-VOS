export default function SideBar() {
  return (
    <div className="bg-white w-1/5 p-6">
      <div className="text-center">
        <h1 className="text-[#ff7f1d] text-4xl font-bold">Community</h1>
        <h2 className="text-[#0a0a23] text-5xl font-bold">Hub</h2>
      </div>
      <nav className="mt-10">
        <ul className="space-y-6">
          <li className="flex items-center space-x-3">
            <i className="fas fa-home text-[#5c2d91]"></i>
            <span className="text-[#5c2d91] text-xl font-semibold">Home</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-hashtag text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">
              Explore
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-bell text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">
              Notifications
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-envelope text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">
              Messages
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-bookmark text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">
              Bookmarks
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-list text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">Lists</span>
          </li>
          <li className="flex items-center space-x-3">
            <img
              src="https://picsum.photos/24"
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-[#333333] text-xl font-semibold">
              Profile
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-ellipsis-h text-[#333333]"></i>
            <span className="text-[#333333] text-xl font-semibold">More</span>
          </li>
        </ul>
      </nav>
      <div className="mt-10 text-center">
        <button className="bg-[#5c2d91] text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md">
          Post
        </button>
      </div>
    </div>
  );
}

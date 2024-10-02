export default function Navbar() {
    return (
  <div className="bg-[#4B2A5A] flex items-center justify-between px-4 py-2">
    <div className="flex items-center">
      <img
        src="https://picsum.photos/50"
        alt="Logo"
        className="h-10 w-10"
      />
      <span className="text-[#333333] text-lg font-semibold ml-2">CSI X VIT AP</span>
    </div>
    <div className="flex space-x-8">
      <div className="flex items-center space-x-2">
        <i className="fas fa-home text-white"></i>
        <span className="text-white">Home</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-comment-dots text-white"></i>
        <span className="text-white">Message</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-heart text-white"></i>
        <span className="text-white">Favourites</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-cog text-white"></i>
        <span className="text-white">Settings</span>
      </div>
    </div>
  </div>
);
}
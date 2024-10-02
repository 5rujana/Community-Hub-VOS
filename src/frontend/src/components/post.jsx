export default function Post() {
    return (
  <div className="bg-[#ffffff] p-4">
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex items-center space-x-2">
        <i className="fas fa-file-alt text-[#6c63ff]"></i>
        <span className="text-[#6c63ff] font-semibold">Posts</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-comments text-[#6c63ff]"></i>
        <span className="text-[#6c63ff] font-semibold">Threads</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <img src="https://picsum.photos/200/300" alt="Event 1" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 2" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 3" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 4" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 5" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 6" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 7" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 8" className="w-full h-auto" />
      <img src="https://picsum.photos/200/300" alt="Event 9" className="w-full h-auto" />
    </div>
  </div>
);
  }